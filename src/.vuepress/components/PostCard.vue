<template>
  <div class="card">
    <a v-bind:href="link">
      <div class="card-title">{{ title }}</div>
      <div class="card-content">{{ desc }}...</div>
    </a>
      <div class="card-footer">
        <div class="card-date">{{ showDate }}</div>
        <div class="dot"></div>
        <div class="card-tag">
          <span v-for="label in labels">{{ label }}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',

  props: {
    title: String,
    desc: String,
    labels: Array,
    date: String,
    update: String,
    showDate: String,
    number: Number,
    link: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

primary-color = darken(red, 20)

.card
  line-height 1.6
  padding-bottom: 10px;
  margin-bottom: 12px;
  border-bottom: 1px dotted rgba(0,0,0,0.2)

  a
    color black
    font-weight: normal
    
  .card-footer
    color #404040
    display flex
    align-content center
    font-size 11px
    // font-weight bold

    .card-tag
      // color primary-color

      span 
        margin-right 5px

  .card-title
    font-size 16px
    // font-weight bold
    line-height 2
    font-hei()

  .card-content
    font-size 12px
    font-hei()
    padding-bottom 5px
    padding-top 5px
    color #808080

.card:hover
  cursor pointer

.dot
  width 3px
  height 3px
  border-radius 20px
  background #404040
  margin 7px 10px
</style>