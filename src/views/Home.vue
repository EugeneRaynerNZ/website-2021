<template>
    <div id="home">
      <!-- logo n stuff goes here -->
      <Header title="Lover of all things Digital" subtitle="Interactive Developer, Designer &amp; Creator"/>
      
      <main class="max-width">
        <Title :heading="'Hey! Nice to meet you. My name\'s Eugene'"/>
        <section class="about image-text-block">
          
          <div class="content">
              <h3>What I am about</h3>
              <p v-for="(paragraph, index) in aboutContent" :key="'content-' + index">{{paragraph}}</p>
          </div>
          <div class="image-text-block--image">
            <img :src="me" alt="Eugene">
          </div>
        </section>

        <Title :heading="'What do I do?'"/>
        <ImageParagraph :title="creator.title" :paragraphs="creator.text" image="creator" :linkText="creator.button.text" :link="creator.button.link"/>
        <ImageParagraph :title="code.title" :paragraphs="code.text" image="octocat" :reverse="true" :linkText="code.button.text"/>
        <ImageParagraph :title="design.title" :paragraphs="design.text" image="figma" :linkText="design.button.text"/>
        <!-- <ImageParagraph :title="blog.title" :paragraphs="blog.text"/> -->
      </main>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import ImageParagraph from '@/components/ImageParagraph.vue'
import Title from '@/components/Title.vue'
import Me from '@/assets/me.svg'

export default {
  name: 'Home',
  components: {
    Header,
    ImageParagraph,
    Title
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
              "I have a vivid imagination, and I see how the <a href=''>world</a> works through glass eyes, literally.",
              "Check out some of my creations and if you would like to create something with me, Send me a message."
            ],
            button: {
              text: 'View my work',
              link: "/creations"
            }
          },
          code: {
            title: 'I love to code',
            text: [
              "I just absolutely love to problem solve. Being a programmer is my life.",
              "I am currently a full time Front End Software Developer at New Zealand’s top rated Jeweller - Naveya & Sloane.",
              "In my spare time I love coming up with quirky creations on Codepen, or coming up with ideas for new projects and making them happen!"
            ],
            button: {
              text: 'View my code'
            }
          },
          design: {
            title: 'A designer at heart',
            text: [
              "All of the skills I have acquired over the years have been in the pursuit of becoming a great creator.",
              "I have a vivid imagination, and I see how the world works through glass eyes, literally.",
              "Check out some of my creations and if you would like to create something with me, Send me a message."
            ],
            button: {
              text: 'View my designs'
            }
          },
          me: Me
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
    flex: 1;
  }

  #home main h2{
    padding: 120px 0;
    font-weight: 100;
    font-size: 50px;
  }
</style>