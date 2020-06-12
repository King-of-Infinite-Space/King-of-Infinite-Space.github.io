<template>
  <div class="header-wrap">
    <div class="header page">
      <div class="left">
        <div class="motto">
          <div class="line" v-for="(line, index) in headTitle" v-bind:key="index">{{line}}</div>
        </div>
        <div class="nav">
          <a :href="link.link" class="nav-item" v-for="(link, index) in nav">{{link.name}}</a>
        </div>
      </div>
      <div class="right">
        <SearchBox />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [],
      headTitle: []
    }
  },

  mounted() {
    this.nav = this.$themeConfig.nav
    this.headTitle = this.$themeConfig.headTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/fonts.styl'

.header-wrap
  // border-bottom 1px solid rgba(0, 0, 0, 0.05)

.header
  display flex
  justify-content space-between
  align-items center
  padding 8px 0
  border-bottom 1px dotted rgba(0, 0, 0, 0.1)

  .left
    .motto
      font-kai()
      font-size 14px
      color black

    .nav
      font-size 14px
      // margin-top 10px
      color darken(red, 20)

      a.nav-item
        color darken(red, 20)

      a.nav-item:not(:last-child):after
        content '/'
        margin-left 5px
        margin-right 5px

      a.nav-item:hover
        color darken(red, 10)

@media print
  .right, .nav
    display none
  .header-wrap
    border 0

@media screen and (max-width $MQMobile)
  /*
  .header
    flex-wrap wrap

    .left
      text-align center
      margin-bottom 20px

  .left, .right
    width 100%
  
  .motto
    margin-bottom 20px
  */
  input
    width 
</style>