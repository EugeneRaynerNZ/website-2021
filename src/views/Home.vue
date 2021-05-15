<template>
    <div id="home">
      <!-- logo n stuff goes here -->
      <div class="home-logo">
          <Logo />
          <div class="home-logo--text">
              <h1>Eugene<br>Rayner</h1>
          </div>
      </div>
      <Header title="Lover of all things Digital" subtitle="Interactive Developer, Designer &amp; Creator"/>
      <section class="about image-text-block">
          <div class="me"></div>
          <div class="content">
              <h3>What I am about</h3>
              <p v-for="(paragraph, index) in aboutContent" :key="'content-' + index">{{paragraph}}</p>
          </div>
      </section>
      <main>
        <h2>Lover of all things digital</h2>
        <ImageParagraph :title="creator.title" :paragraphs="creator.text"/>
        <ImageParagraph :title="code.title" :paragraphs="code.text"/>
        <ImageParagraph :title="design.title" :paragraphs="design.text"/>
        <ImageParagraph :title="blog.title" :paragraphs="blog.text"/>
      </main>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import ImageParagraph from '@/components/ImageParagraph.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Logo,
    ImageParagraph
  },
  data() {
      return {
          aboutContent: [
              "Interactive Developer, Designer and most of all, a creator.",
              "I love all things digital. Websites, apps, blockchains, you name it, I know about it, and i’ve probably done it too.",
              "I’ve got 6 years experience in designing and developing frontend projects. I love interactive experiences, those places where you show your friends, and keep coming back for me to enjoy the experience."
          ],
          creator: {
            title: 'First and Foremost I am a Creator',
            text: [
              "All of the skills I have acquired over the years have been in the pursuit of becoming a great creator.",
              "I have a vivid imagination, and I see how the world works through glass eyes, literally.",
              "Check out some of my creations and if you would like to create something with me, Send me a message."
            ]
          },
          code: {
            title: 'I love to code',
            text: [
              "All of the skills I have acquired over the years have been in the pursuit of becoming a great creator.",
              "I have a vivid imagination, and I see how the world works through glass eyes, literally.",
              "Check out some of my creations and if you would like to create something with me, Send me a message."
            ]
          },
          design: {
            title: 'First and Foremost I am a Creator',
            text: [
              "All of the skills I have acquired over the years have been in the pursuit of becoming a great creator.",
              "I have a vivid imagination, and I see how the world works through glass eyes, literally.",
              "Check out some of my creations and if you would like to create something with me, Send me a message."
            ]
          },
          blog: {
            title: 'I write blogs',
            text: [
              "I love to write, it comes with being a creator.",
              "My blogs aren’t specific to any subject, sometimes I write about code, sometimes design. Sometimes I write about a real world problem that I am trying to solve.",
              "If you’re interested in reading what i’ve got to say, head on over and read some of my blogs."
            ]
          }
      }
  },
}
</script>

<style>
  .home-logo{
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
  .home-logo--text{
    font-size: 151px;
    text-transform: uppercase;
  }

  .logo--large{
   flex: 0 0 40%
  }

  #home main h2{
    text-align: center;
    padding: 120px;
    font-weight: 100;
    font-size: 50px;
  }
</style>