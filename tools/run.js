const github = require('@actions/github')
const fs = require('fs')
const path = require('path')
const { vssueConfig, repoConfig, slogan, base } = require('../src/.vuepress/config')

const { owner, repo } = vssueConfig // get issue from another repo
const issueFile = path.resolve(__dirname, './issues.json')
const cateFile = path.resolve(__dirname, './cates.json')
const Feed = require('feed').Feed;
const { markdownToTxt } = require('markdown-to-txt');

let token = null
if (process.env.NODE_ENV == 'local') {
  token = require('./config').token
} else if (process.env.NODE_ENV == 'action') {
  token = process.env.GITHUB_TOKEN
} else {
  throw error("Wrong Enviorment Params!")
}

/**
 * Make a log.
 * @param {String} str log string
 */
function log(str) {
  console.log(str)
}

/**
 * Format date string to YYYY/MM/DD
 * @param {String} date a date string
 */
function fmtDate(date) {
  const theDate = new Date(date)
  const year = theDate.getFullYear()
  const month = (theDate.getMonth() + 1).toString().padStart(2, '0')
  const day = theDate.getDate().toString().padStart(2, '0')
  return [year, month, day].join('/')
}

/**
 * Write issues to markdown file.
 * @param {Object} rawData raw request data object.
 */
function formatDocument(rawData) {
  const data = rawData
  log(`[summary] ${data.length} issues`)

  const postPath = path.resolve(__dirname, '../src/posts')

  // process post file
  data.forEach((issue, i) => {
    log(`[processing ${i + 1} of ${data.length}] ${issue.number}.${issue.title}`)
    const fm = [`layout: PostLayout`,
      `id: ${issue.number}`,
      `date: ${fmtDate(issue.created_at)}`,
      `update: ${fmtDate(issue.updated_at)}`,
      `comments: ${issue.comments}`,
      `author: ${issue.user.login}`
    ].join('\n')
    const markdownText = `---\n${fm}\n---\n# ${issue.title}\n\n${issue.body}`
    fs.writeFile(path.resolve(postPath, `./${issue.number}.md`), markdownText, () => {})
  })

  log('[post] issues have been written to md files.')
}

/**
 * Process post data.
 * @param {Array} data 
 */
function processPost(data) {
  // process post summary
  const postsData = data.map(issue => {
    return {
      title: issue.title,
      desc: markdownToTxt(issue.body.slice(0, 200)).slice(0,100),
      tag: issue.labels ? Array.from(issue.labels, x => x.name) : [],
      date: fmtDate(issue.created_at),
      update: fmtDate(issue.updated_at),
      updated_at: issue.updated_at,
      created_at: issue.created_at,
      number: issue.number,
      link: `${base}posts/${issue.number}.html`
    }
  })

  return postsData
}

/**
 * Process category data.
 * @param {Array} rawData raw request data of milestones
 */
function processCategory(rawData) {
  const data = rawData

  const dataPath = path.resolve(__dirname, '../src/.vuepress/data')

  const mData = data.map(m => {
    return {
      name: m.name,
      // count: m.open_issues,
      color: m.color,
      desc: m.description,
      link: `${base}categories/${m.name}.html`
    }
  })

  return mData
}

async function download() {
  const tools = new github.GitHub(token)

  log('[download] requesting issues')
  try {
    let data = await tools.issues.listForRepo({
      owner, repo, sort: 'updated'
    })

    // filter issues
    if (repoConfig.filterUsers && repoConfig.filterUsers.length > 0) {
      const filterUsers = repoConfig.filterUsers
      const count = data.data.length
      data.data = data.data.filter(v => filterUsers.includes(v.user.login))
      log(`[filter] filtered ${count - data.data.length} issues`)
    }

    log('[download] writing Issues Data')
    const rawData = JSON.stringify(data)
    fs.writeFileSync(issueFile, rawData)
    log('[download] done')
  } catch (error) {
    log(error)
    return
  }

  log('[download] requesting milestones')
  try {
    const cates = await tools.issues.listLabelsForRepo({
      owner, repo
    })

    log('[download] writing milestones data')
    const mData = JSON.stringify(cates)
    fs.writeFileSync(cateFile, mData)
    log('[download] done')
  } catch (error) {
    log(error)
    return
  }
}

/**
 * Write data to home page read me.
 * @param {Array} issues issue list
 * @param {Array} milestones milestone list
 */
function writeHomePageReadMe(issues, milestones) {
  const postsData = processPost(issues)
  let mData = processCategory(milestones)

  // group issues by milestone
  let issuesGounpByMs = {}
  issues.forEach(issue => {
    if (!issue.labels) return
    issue.labels.forEach(label => {
      if (!issuesGounpByMs[label.name]) issuesGounpByMs[label.name] = []
      issuesGounpByMs[label.name].push(issue)
    })
  })

  // add count for labels
  let totalCount = 0
  mData.forEach(label => {
    label.count = issuesGounpByMs[label.name] ? issuesGounpByMs[label.name].length : 0
    // BUG FIX: don't know why somethimes it is undefined
    totalCount = totalCount + label.count
  })
  mData = [{
    name: '全部文章',
    count: totalCount,
    desc: `共发布了 ${totalCount} 篇文章。`,
    link: `/`
  }].concat(mData)

  // merge issues to milestones
  milestones = milestones.map(m => {
    return {
      ...m,
      issues: issuesGounpByMs[m.name] || []
    }
  })

  log('[writing] writing data to ReadMe')

  const readMeMeta = JSON.stringify({
    slogan,
    posts: postsData,
    categories: mData
  })
  const readMeText = `---\n${readMeMeta}\n---`
  const readmePath = path.resolve(__dirname, '../src')
  fs.writeFile(path.resolve(readmePath, './README.md'), readMeText, () => {})

  // write milestones
  const mPath = path.resolve(__dirname, '../src/categories')
  const files = fs.readdirSync(mPath)
  // delete old files
  files.forEach(filename => {
    if (filename.endsWith('md')) {
      fs.unlinkSync(path.resolve(mPath, filename), () => {})
    }
  })

  log('[writing] writing categories')
  // write new files
  milestones.forEach(m => {
    const issueData = processPost(m.issues)
    const mRawData = {
      slogan: {
        main: m.name,
        sub: m.description
      },
      posts: issueData,
      categories: mData
      
    }
    const mText = ['---', JSON.stringify(mRawData), '---'].join('\n')
    fs.writeFile(path.resolve(mPath, `${m.name}.md`), mText, () => {})
  })
}

/**
 * Generate RSS feed.
 * @param {Array} issues issue list
 */
function generateFeed(issues) {
  const postsData = processPost(issues)
  log('[writing] writing data to feed')
  const feed = new Feed({
    title: "the Universe in a Nutshell",
    description: "Blog by King of Infinite Space",
    link: "https://king-of-infinite-space.github.io",
    feedLinks: {
      atom: "https://king-of-infinite-space.github.io/feed/feed.atom"
    },
    author: {
      name: "King of Infinite Space"
    }
  });
  let feedCount = 0
  postsData.forEach(post => {
    if (feedCount < 5) {
      feed.addItem({
        title: post.title,
        // id: post.number,
        link: feed.options.link + post.link,
        description: post.desc,
        content: post.desc,
        author: [
          {
            name: "King of Infinite Space"
          }
        ],
        date: new Date(post.updated_at),
      });
    }
    feedCount = feedCount + 1
  });

  const feedPath = path.resolve(__dirname, '../src/.vuepress/public/feed')
  if (!fs.existsSync(feedPath)){
      fs.mkdirSync(feedPath, {recursive: true});
    }
  
  fs.writeFileSync(path.resolve(feedPath, './feed.atom'), feed.atom1())
}

async function saveToFile() {
  const pData = JSON.parse(fs.readFileSync(issueFile))
  // log(mData)
  const mData = JSON.parse(fs.readFileSync(cateFile))
  formatDocument(pData.data)
  writeHomePageReadMe(pData.data, mData.data)
  generateFeed(pData.data)
}

async function main() {
  await download()
  await saveToFile()
}

main()
