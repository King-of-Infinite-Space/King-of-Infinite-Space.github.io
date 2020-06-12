/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "King-of-Infinite-Space",
    repo: "thoughts",
    clientId: "afa844a3164ad909a4d9",
    clientSecret: "bc397cda0210dc717a512fa53e8a7522c2a9837c"
  },

  repoConfig: {
    owner: "King-of-Infinite-Space",
    repo: "King-of-Infinite-Space.github.io",
    pushBranch: "master",
    email: "fcbarcelona.plh@gmail.com",
    filterUsers: ['King-of-Infinite-Space']
  },

  title: "the Universe in a Nutshell",
  description: "no desc",
  customDomain: "",
  base: "/",

  slogan: {
    main: "the Universe in a Nutshell",
    sub: ""
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "Github",
        link: "https://github.com/King-of-Infinite-Space/thoughts/issues"
      },
      {
        name: 'RSS',
        link: "/feed/feed.atom"
      }
    ],
    headTitle: [],
    friendLinks: [
    ],
    extraFooters: [
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: ""
      }
    ]
  ]
}

module.exports = mainConfig
