const github = require('@actions/github')
const fs = require('fs')
const path = require('path')
const { vssueConfig, repoConfig, title, description, feedLink, slogan, base, themeConfig } = require('../src/.vuepress/config')

const { owner, repo } = vssueConfig // get issue from another repo
const issueFile = path.resolve(__dirname, './issues.json')
const cateFile = path.resolve(__dirname, './cates.json')
const Feed = require('feed').Feed;
const uslug = require("uslug");
const stripHtml =require("string-strip-html");
const removeMd = require('remove-markdown');

let md = require('markdown-it')({
  html: true,
  breaks: true
});

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
function fmtDate(date, separator = '/') {
  const theDate = new Date(date)
  const year = theDate.getFullYear()
  const month = (theDate.getMonth() + 1).toString().padStart(2, '0')
  const day = theDate.getDate().toString().padStart(2, '0')
  return [year, month, day].join(separator)
}

/**
 * Process post data.
 * @param {Array} data 
 */
function processPost(data) {
  // process post summary
  const postsData = data.map(issue => {
    let fn = fmtDate(issue.created_at,'-').slice(0,-2)+uslug(issue.title.replace(/\/|\./g,'-'))
    let descMd = stripHtml(issue.body).result
    let descText = removeMd(descMd).slice(0,100).split("\n", 1)[0]

    return {
      title: issue.title,
      desc: descText,
      label: issue.labels ? Array.from(issue.labels, x => x.name) : [],
      milestone: issue.milestone ? issue.milestone.title : '',
      created_at_str: fmtDate(issue.created_at),
      updated_at_str: fmtDate(issue.updated_at),
      updated_at: issue.updated_at,
      created_at: issue.created_at,
      number: issue.number,
      // link: `${base}posts/${fn}.html`,
      comments: issue.comments,
      author: issue.user.login,
      permalink: `${base}posts/${fn}.html`,
      sourceLink: `https://github.com/${vssueConfig.owner}/${vssueConfig.repo}/issues/${issue.number}`,
      filename: fn,
      body: issue.body
    }
  })
  return postsData
}

/**
 * Process category data.
 * @param {Array} rawData raw request data of labels
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

/**
 * Write issues to markdown file.
 * @param {Object} rawData raw request data object.
 */
function formatDocument(rawData) {
  const data = processPost(rawData)
  log(`[summary] ${data.length} issues`)

  const postPath = path.resolve(__dirname, '../src/posts')

  // process post file
  data.forEach((issue, i) => {
    log(`[processing ${i + 1} of ${data.length}] ${issue.number}.${issue.filename}`)
    let fm = [`layout: PostLayout`]
    for (let [key, value] of Object.entries(issue)) {
      if (key == 'title' | key == 'desc') {
        value = `"${value.replace(/"/g, '\\"')}"` // escape double quotes
      }
      if (key != 'body') {
        fm.push(`${key}: ${value}`)
      }
    }
    fm = fm.join('\n')
    
    // yyyy-mm-title
    const markdownText = `---\n${fm}\n---\n# ${issue.title}\n\n${issue.body}`
    if (!fs.existsSync(postPath)){
      fs.mkdirSync(postPath);
    }
    fs.writeFileSync(path.resolve(postPath, `./${issue.filename}.md`), markdownText, () => {})
  })

  log('[post] issues have been written to md files.')
}

async function download() {
  const tools = new github.GitHub(token)

  log('[download] requesting issues')
  
  try {
    // need to use pagination because by default only first 30 items are listed
    let data = await tools.paginate("GET /repos/:owner/:repo/issues", {
      owner, repo, sort: 'updated'})
      
    // let data = await tools.issues.listForRepo({
    //   owner, repo, sort: 'updated'
    // })

    // filter issues
    if (repoConfig.filterUsers && repoConfig.filterUsers.length > 0) {
      const filterUsers = repoConfig.filterUsers
      const count = data.length
      data = data.filter(v => filterUsers.includes(v.user.login))
      log(`[filter] filtered ${count - data.length} issues`)
    }

    log('[download] writing Issues Data')
    const rawData = JSON.stringify(data)
    fs.writeFileSync(issueFile, rawData)
    log('[download] done')
  } catch (error) {
    log(error)
    return
  }

  log('[download] requesting labels')
  try {
    const cates = await tools.issues.listLabelsForRepo({
      owner, repo
    })

    log('[download] writing labels data')
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
 * @param {Array} labels label list
 */
function writeHomePageReadMe(issues, labels) {
  const postsData = processPost(issues)
  let mData = processCategory(labels)

  // group issues by label
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
    count: postsData.length,
    desc: `共发布了 ${postsData.length} 篇文章。`,
    link: `/`
  }].concat(mData)

  // merge issues to labels
  labels = labels.map(m => {
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
  fs.writeFileSync(path.resolve(readmePath, './README.md'), readMeText, () => {})

  // use labels to filter posts in frontpage rather than 
  // have separate categories

  // write labels
  // const mPath = path.resolve(__dirname, '../src/categories')
  // const files = fs.readdirSync(mPath)
  // // delete old files
  // files.forEach(filename => {
  //   if (filename.endsWith('md')) {
  //     fs.unlinkSync(path.resolve(mPath, filename), () => {})
  //   }
  // })

  // log('[writing] writing categories')
  // // write new files
  // labels.forEach(m => {
  //   const issueData = processPost(m.issues)
  //   const mRawData = {
  //     slogan: {
  //       main: m.name,
  //       sub: m.description
  //     },
  //     posts: issueData,
  //     categories: mData
      
  //   }
  //   const mText = ['---', JSON.stringify(mRawData), '---'].join('\n')
  //   fs.writeFile(path.resolve(mPath, `${m.name}.md`), mText, () => {})
  // })
}

/**
 * Generate RSS feed.
 * @param {Array} issues issue list
 */
function generateFeed(issues) {
  const postsData = processPost(issues)
  log('[writing] writing data to feed')
  const feed = new Feed({
    title: title,
    description: description,
    id: `https://${repoConfig.owner}.github.io${base}`,
    link: `https://${repoConfig.owner}.github.io${base}`,
    feedLinks: {
      atom: `https://${repoConfig.owner}.github.io${feedLink}`
    },
    author: {
      name: vssueConfig.owner
    }
  });
  let feedCount = 0
  postsData.forEach(post => {
    if (feedCount < 5 && !post.milestone) {
      // don't create feed for updating issues
      feed.addItem({
        title: post.title,
        id: feed.options.link + post.permalink,
        link: feed.options.link + post.permalink,
        description: post.desc,
        content: md.render(post.body),
        author: [
          {
            name: post.author
          }
        ],
        date: new Date(post.created_at),
      });
      feedCount = feedCount + 1
    }
  });

  const feedPath = path.resolve(__dirname, '../src/.vuepress/public/')
  if (!fs.existsSync(feedPath)){
      fs.mkdirSync(feedPath, {recursive: true});
    }
  
  fs.writeFileSync(path.resolve(feedPath, './feed.atom'), feed.atom1())
}

async function saveToFile() {
  const pData = JSON.parse(fs.readFileSync(issueFile))
  const mData = JSON.parse(fs.readFileSync(cateFile))
  formatDocument(pData)
  writeHomePageReadMe(pData, mData.data) // frontmatter for homepage
  generateFeed(pData)
}

async function main() {
  await download()
  await saveToFile()
}

main()
