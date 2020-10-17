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
      <div class="posts">
        <LoadingCard />
        <!-- 这里使用`v-if="!posts.length"`会使 build 出的页面报错，不知道原因 -->
        <PostCard v-for="(post, index) in posts" v-bind:key="index"
          v-bind:title="post.title" v-bind:desc="post.desc"
          v-bind:tag="post.tag" v-bind:date="post.date" v-bind:update="post.update"
          v-bind:number="post.number" v-bind:link="post.link"/>
      </div>
      <div class="side">
        <div class="side-category">
          <LoadingCategory />
          <Category v-for="(category, index) in categories" v-bind:key="index" 
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
      posts: [],
      categories: []
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
    this.posts = this.$frontmatter.posts
    this.categories = this.$frontmatter.categories.sort((a,b) => b.count - a.count)
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
    padding 0 20px

  .side-bag
    box-shadow 0 -3px 2px rgba(0, 0, 0, 0.03)
    height 40px
    transform translateX(0)
    background white
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px
    border-top 0

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