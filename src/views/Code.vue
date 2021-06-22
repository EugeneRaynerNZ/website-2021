<template>
  <div id="code">
    <Header title="I code things on Codepen" subtitle="Let's create something fun" :small-header="true"/>
    
    <main class="max-width">
      <Intro :textArray="introduction"/>
      <div class="project" v-for="project in projects" :key="'v-' + project.title">
          <Title :heading="project.title" />
          <Codepen :embedUrl="project.embedUrl" :projectTitle="project.projectTitle" :projectLink="project.button.link"/>
          <div class="content">
              <div class="creative">
                  <h3>Creative Input</h3>
                  <p v-for="(creative, index) in project.creative" :key="'v-' + index">{{creative}}</p>
                  <template v-if="project.button.link">
                    <a target="_blank" :href="project.button.link" class="main-button">
                        <span class="main-button--text">{{project.button.text}}</span> 
                        <span class="main-button--icon">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7.4 12" style="enable-background:new 0 0 7.4 12;" xml:space="preserve">
                            <path class="st0" d="M1.4,0L0,1.4L4.6,6L0,10.6L1.4,12l6-6L1.4,0z"/>
                          </svg>
                        </span>
                    </a>
                  </template>
              </div>
              <div class="built-with">
                  <h3>Built With</h3>
                  <div class="tags">
                      <Tag v-for="tag in project.tags" :key="'v-' + tag" :name="tag"/>
                  </div>
              </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Title from '@/components/Title.vue'
import Codepen from '@/components/Codepen.vue'
import Tag from '@/components/Tag.vue'

export default {
  name: 'Code',
  components: {
    Header,
    Intro,
    Title,
    Codepen,
    Tag
  },
  data() {
      return {
        introduction: [
          "I've always been really into creating cool, whacky code snippets. I love creating cool animated / interactive codepens for viewing pleasure.",
          "Below are some of my favorite code snippets I have created."
        ],
        projects: [
          {
          title: 'Pure CSS 3d ball bounce',
          embedUrl: "https://codepen.io/erayner/embed/NWpzLQB?height=265&theme-id=light&default-tab=html,result",
          projectTitle: "3d Box",
          creative: [
            'Created using pure CSS (No JS!), this 3d scene is quite the piece of art.',
            'This project is created on a 3d plane. It uses preserve3d, animations, shadows and slight adjustments to make it look like a 3d object.',
            'The ball is not round. It\'s actually an optical illusion. It has a radial blur to make it look round. It also rotates in an opposite direction with the scene. Remove that and you will see the 2d-ness of the ball.'
          ],
          button: {
            link: 'https://codepen.io/erayner/pen/NWpzLQB',
            text: 'View on Codepen'
          },
          tags: ['HTML5', 'SCSS']
        },
        {
          title: 'Pure CSS 3d Elephant',
          embedUrl: "https://codepen.io/erayner/embed/MWpBrBq?height=330&theme-id=light&default-tab=css,result",
          projectTitle: "Elephant",
          creative: [
            'hello',
            'test'
          ],
          button: {
            link: 'https://codepen.io/erayner/pen/MWpBrBq',
            text: 'View on Codepen'
          },
          tags: ['HTML5', 'SCSS']
        }
        ]
      }
  },
}
</script>