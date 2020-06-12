/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "King-of-Infinite-Space",
    repo: "thoughts",
    clientId: "95b4afb29a7a4e06dde9",
    clientSecret: "5c9142fc80525bf8396eeaa0487fd919d75ef0aa"
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
        link: "/feed.atom"
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
