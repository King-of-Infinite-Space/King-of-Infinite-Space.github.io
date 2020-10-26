<template>
  <a :href="link">
    <div class="category" @click="$emit('labelClicked')" v-bind:class="{'selected': selected}">
      <div class="category-header">
        <div class="category-name">{{ name }}<sub>{{ count }}</sub></div>
        <!-- <div class="category-count">{{ count }}</div> -->
      </div>
      <!-- <div class="category-desc">{{ desc }}</div> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'Category',

  props: {
    name: String,
    count: Number,
    desc: String,
    link: String,
    selected: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

a
  font-weight: normal

.category
  background linear-gradient(-60deg, #fbfbfb, transparent)
  font-size 13px
  padding 10px
  /*
  padding-bottom 50px;
  margin-bottom -30px
  box-shadow 0 0 5px rgba(0, 0, 0, 0.1)
  */
  border-radius 10px
  line-height 1
  transition all ease .2s
  // font-weight bold
  overflow hidden
  color #000

  .category-header
    display flex
    align-content center
    justify-content center
    position relative

  .category-count
    position absolute
    right -20px
    top -30px
    background #eee
    text-align center
    width 40px
    border-bottom-left-radius 10px
    padding 20px 0 10px 0

  .category-desc
    margin-top 10px
    font-size 12px
    color #666
    opacity 0.3

  .category-name
    sub 
      font-size x-small

.category:hover
  transform scale(1.1,1.1)
  .category-desc
    opacity 1

.selected
  border 2px solid blue

 
@media screen and (max-width 576px)
  .category
    margin-right 3px

    .category-header
      white-space nowrap

</style>