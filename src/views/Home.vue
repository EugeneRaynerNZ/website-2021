<template>
  <div id="home">
      <!-- logo n stuff goes here -->
    <Header title="Lover of all things Digital" subtitle="Interactive Developer, Designer &amp; Creator"/>
    <section class="about image-text-block">
        <div class="me"></div>
        <div class="content">
            <h3>What I am about</h3>
            <p v-for="(paragraph, index) in aboutContent" :key="'content-' + index">{{paragraph}}</p>
        </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  data() {
      return {
          aboutContent: [
              "Interactive Developer, Designer and most of all, a creator.",
              "I love all things digital. Websites, apps, blockchains, you name it, I know about it, and i’ve probably done it too.",
              "I’ve got 6 years experience in designing and developing frontend projects. I love interactive experiences, those places where you show your friends, and keep coming back for me to enjoy the experience."
          ]
      }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
    .about{
        display: flex;
    }

    .me{
        background: black;
        width: 50px;
        height: 50px;
    }
</style>