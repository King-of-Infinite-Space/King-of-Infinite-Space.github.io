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
    main: "slogan1",
    sub: "slogan2"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "Github",
        link: "https://github.com/King-of-Infinite-Space"
      },
      {
        name: "CV",
        link: "/cv.html"
      }
    ],
    headTitle: ["header1", "header2"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "",
        text: "@ 蜀 ICP 备 19000509 号 - 1"
      }
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
