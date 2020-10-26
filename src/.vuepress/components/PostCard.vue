<template>
  <div class="card">
    <a v-bind:href="link">
      <div class="card-title">{{ title }}</div>
      <div class="card-content">{{ desc }}...</div>
    </a>
      <div class="card-header">
        <div class="card-date">{{ showDate }}</div>
        <div class="dot"></div>
        <div class="card-tag">
          <span v-for="label in tag">{{ label }}</span>
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
    tag: Array,
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
  border-bottom: 1px dotted rgba(0,0,0,0.1)

  a
    color black
    font-weight: normal
    
  .card-header
    display flex
    align-content center
    font-size 11px
    // font-weight bold

    .card-tag
      color primary-color

      span 
        margin-right 5px

  .card-title
    font-size 16px
    // font-weight bold
    line-height 2
    color #363134
    font-hei()

  .card-content
    font-size 12px
    font-hei()
    padding-bottom 5px
    padding-top 5px

.card:hover
  cursor pointer

.dot
  width 4px
  height 4px
  border-radius 20px
  background black
  margin 7px 10px
</style>