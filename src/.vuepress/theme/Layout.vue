<template>
<div>
  <Header />
  <div class="page">
    <div class="banner">
      <div class="slogan">
        <div class="slogan1">{{$frontmatter.slogan.main}}</div>
        <div class="slogan2">{{$frontmatter.slogan.sub}}</div>
      </div>
      <div class="colors">
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
      </div>
    </div>
    <div class="content">
      <div class="posts articles">
        <LoadingCard />
        <PostCard v-for="(post, index) in articles_shown" v-bind:key="index"
          v-bind:title="post.title" v-bind:desc="post.desc"
          v-bind:tag="post.tag" v-bind:date="post.date" v-bind:update="post.update"
          v-bind:number="post.number" v-bind:link="post.link"/>
      </div>
      <div class="pages article-pages">
        <span class="page-button left" @click="change_page(-1,articles_pn,articles_max)">&#60;</span>
        <span class="page-number">{{articles_pn}} / {{articles_max}}</span>
        <span class="page-button right" @click="change_page(1,articles_pn,articles_max)">&#62;</span>
      </div>
      <div class="pages moment-pages">
        <span class="page-button left" @click="change_page(-1,moments_pn,moments_max)">&#60;</span>
        <span class="page-number">{{moments_pn}} / {{moments_max}}</span>
        <span class="page-button right" @click="change_page(1,moments_pn,moments_max)">&#62;</span>
      </div>
      <div class="posts moments">
        <LoadingCard />
        <PostCard v-for="(post, index) in moments_shown" v-bind:key="index"
          v-bind:title="post.title" v-bind:desc="post.desc"
          v-bind:tag="post.tag" v-bind:date="post.date" v-bind:update="post.update"
          v-bind:number="post.number" v-bind:link="post.link"/>
      </div>
      <div class="side">
        <div class="side-category">
          <LoadingCategory />
          <Category v-for="(category, index) in labels" v-bind:key="index" 
            v-bind:class="{selected: labels_selected.includes(category)}"
            v-bind:name="category.name" v-bind:count="category.count"
            v-bind:desc="category.desc" v-bind:link="category.link"/>
        </div>
        <!-- <div class="side-bag"></div> -->
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
export default {
  data () {
    return {
      articles: [],
      moments: [],
      labels: [],
      labels_selected: [],
      moments_pp: 5,
      articles_pp: 10,
      moments_pn: 1,
      articles_pn: 1,
    }
  },

  beforeUpdate () {
    ['.loading-cards', '.loading-categories'].forEach(v => {
      const node = document.querySelector(v)
      if (!node) return
      node.style.display = 'none'
    })
  },

  mounted () {
    this.$frontmatter.posts.forEach(p => {
      if (p.milestone) {
        this.moments.push(p) // already sorted by update date
      } 
      else {
        this.articles.push(p)
      }
    })
    this.articles.sort((a,b) => parseInt(b.created_at.replaceAll('-','')) - parseInt(a.created_at.replaceAll('-','')))
    this.labels = this.$frontmatter.categories.sort((a,b) => b.count - a.count)
  },

  computed: {
    moments_max: function(){
      return Math.ceil(this.moments_selected.length / this.moments_pp)},
    articles_max: function(){
      return Math.ceil(this.articles_selected.length / this.articles_pp)},
    moments_selected: function(){
      return this.moments.filter(item => {
        return this.have_labels(item, this.labels_selected)
      })
    },
    moments_shown: function () {
      start = (this.moments_pn - 1) * this.moments_pp + 1
      end = this.moments_pn * this.moments_pp
      return this.moments_selected.slice(start-1,end)
    },
    articles_selected: function(){
      return this.articles.filter(item => {
        return this.have_labels(item, this.labels_selected)
      })
    },
    articles_shown: function () {
      start = (this.articles_pn - 1) * this.articles_pp + 1
      end = this.articles_pn * this.articles_pp
      return this.articles_selected.slice(start-1,end)
    },
  },

  methods: {
    select_label(label) {
      const idx = this.labels_selected.indexOf(label)
      if (idx > -1) {
        this.labels_selected.splice(idx, 1);
      } else {
        this.labels_selected.push(label)
      }
    },
    change_page(c, pn, pmax){
      if (c < 0) { return Math.max(pn+c,1)}
      else { return Math.min(pn+c, pmax)}
    },
    moments_change_page (c) { this.moments_pn = this.change_page(c, this.moments_pn, this.moments_max)},
    articles_change_page (c) { this.articles_pn = this.change_page(c, this.articles_pn, this.articles_max)},
    have_labels (issue, labels) {
      labels.forEach(item => {
        if (!issue.label.includes(item)) return false
      })
      return true
    }
  }

}
</script>

<style lang="stylus">
@import "../styles/fonts.styl"
@import url('https://use.typekit.net/obb3blh.css'); // satisfy font from adobe

.banner
  font-banner()
  margin-top 50px
  color #aaa
  font-weight bold
  font-size 36px
  position relative

  .slogan2
    font-size 18px

  .colors
    width 200px
    position absolute
    right 10%
    top 100%
    z-index -1

    .color
      position absolute
      height 200px
      width 200px
      filter blur(50px) opacity(0.7)

    /* colors = (#66f5b2 #e298dc #f03757) */
    colors = (#EC79EC #79ECEC #ECEC79)
    n = 3
    h_n = (n + n % 2) / 2
    for i in (1..n)
      .color:nth-child({i})
        background colors[i - 1]
        left (i - h_n) * 40px
        top (i - h_n) * 20px
        animation flyHigh 8s + i * 5s ease infinite alternate-reverse

@keyframes fly
  0%
    transform translate(0px, 0px) rotateZ(0deg)
  50%
    transform translate(50px, -50px) rotateZ(360deg)
  100%
    transform translate(-50px, 50px) rotateZ(0deg)

@keyframes flyHigh
  0%
    transform translate(0px, 0px) rotateZ(0deg)
  50%
    transform translate(70px, 70px) rotateZ(360deg)
  100%
    transform translate(-70px, -70px) rotateZ(0deg)

/*
.banner:before
  content '{{'
  position absolute
  font-size 80px
  color rgba(0, 0, 0, 0.1)
  left -100px
  top 8px
*/

.content
  width 100%
  display flex
  align-content flex-start
  justify-content space-between
  margin-top 40px

  .posts
    box-sizing border-box
    width 100%
    min-height 400px

  .side
    box-sizing border-box
    min-width 140px
    margin-left 20px

  .side-category
    padding 0 
    
    .category selected
      border 2px solid blue

  .side-bag
    box-shadow 0 -3px 2px rgba(0, 0, 0, 0.03)
    height 40px
    transform translateX(0)
    background white
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px
    border-top 

@media screen and (max-width 576px)
  .banner
    font-size 28px
    text-align center
    margin-top 30px

    .slogan2
      font-size 14px

    .colors
      right 0
      top 40%

      .color
            position absolute
            height 100px
            width 100px
            filter blur(30px) opacity(0.7)

  .content
    flex-wrap wrap
    flex-direction column-reverse
    margin-top 30px

    .side
      width 100%
      padding 0
      margin-left 0px
      margin-bottom 20px

      .side-category
        padding 0px
        width: 100%
        overflow-x auto
        overflow-y hidden
        display flex
</style>