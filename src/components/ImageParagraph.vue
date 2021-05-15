<template>
  <div class="paragraph-image-block">
      <Logo />
      <div class="paragraph-image-block--text">
        <h3>{{title}}</h3>
        <p v-for="(paragraph, index) in paragraphs" :key="'paragraph-' + index">{{paragraph}}</p>
      </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'Paragraph',
  components: {
    Logo
  },
  props: {
      title: String,
      paragraphs: Array
  }
}
</script>

<style>
    .paragraph-image-block{
        display: flex;
    }

    .paragraph-image-block svg{
        flex: 0 0 30%
    }

    .paragraph-image-block--text{
        padding-left: 30px;
    }

    .paragraph-image-block--text h3{
        font-size: 36px;
    }

    .paragraph-image-block--text p{
        margin-top: 8px;
    }
</style>