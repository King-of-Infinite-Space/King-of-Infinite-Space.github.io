const mk = require("markdown-it-katex");
const ck = require("markdown-it-task-checkbox")
const customConfig = require("./custom")

module.exports = {
  ...customConfig,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/prism/9000.0.1/themes/prism.min.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/KaTeX/0.5.1/katex.min.css"
      }
    ],
    [
      "script",
      {
        charset: "utf-8",
        src: "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
        async: true
      }
    ],
    ...customConfig.head
  ],

  themeConfig: {
    ...customConfig.themeConfig,
    base: customConfig.base
  },

  // dev config
  host: "0.0.0.0",
  plugins: [
    [ 
      "@vuepress/blog", {
        directories: [{
          id: 'post',
          dirname: '_posts',
          path: '/post/',
          itemPermalink: '/post/:year/:month/:slug',
          layout: 'Layout',
          itemLayout: 'PostLayout',
          pagination: {lengthPerPage: 10,},
        }],
        feed: {
          canonical_base: customConfig.fullUrl,
          },
        frontmatter: [
          {
            id: 'label',
            keys: ['label'],
            path: '/tag/',
            scopeLayout: 'Layout'
          },
          
        ]
      },
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github-v4",
        ...customConfig.vssueConfig
      }
    ]
  ],
  markdown: {
    breaks: true,
    extendMarkdown: md => {
      md.use(mk); // katex
      md.use(ck); // checkbox
    }
  }
};
