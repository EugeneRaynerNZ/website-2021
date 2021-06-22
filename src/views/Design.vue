<template>
  <div id="designs">
    <Header title="Designing is my second nature." subtitle="Check out some designs below"  :small-header="true"/>
    <main class="max-width">
       <Intro :textArray="introduction"/>
      <div class="project" v-for="project in projects" :key="'v-' + project.title">
        <Title :heading="project.name" />
        <ProjectImage :url="project.button.link" :src="project.imageUrl"/>
          <div class="content">
            <div class="creative">
                <h3>Creative Input</h3>
                <p v-for="(creative, index) in project.creative" :key="'v-' + index">{{creative}}</p>
            </div>
            <div class="built-with">
                <h3>Designed With</h3>
                <div class="tags">
                    <Tag v-for="tag in project.tags" :key="'v-' + tag" :name="tag"/>
                </div>
            </div>
        </div>
      </div>

      <h3>Want to see more?</h3>
      <a style="margin-top: 20px;" target="_blank" :href="link" class="main-button">
        <span class="main-button--text">Check out my dribbble</span> 
        <span class="main-button--icon large">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.6 16.6" style="enable-background:new 0 0 16.6 16.6;" xml:space="preserve">
            <path class="st0" d="M14.1,14.5H2.4V2.9h5.8V1.2H2.4c-0.9,0-1.7,0.8-1.7,1.7v11.7c0,0.9,0.7,1.7,1.7,1.7h11.7c0.9,0,1.7-0.7,1.7-1.7
                V8.7h-1.7V14.5z M9.9,1.2v1.7h3L4.7,11l1.2,1.2L14.1,4v3h1.7V1.2H9.9z"/>
            </svg>
        </span>
      </a>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Title from '@/components/Title.vue'
import ProjectImage from '@/components/ProjectImage.vue'
import Tag from '@/components/Tag.vue'

export default {
  name: 'Design',
  components: {
    Header,
    Intro,
    Title,
    ProjectImage,
    Tag
  },
  data() {
    return {
      introduction: [
        "I create quick, 15 minute designs for <a class='inline-link' href='https://www.dailyui.co/' target='_blank'>DailyUI</a> and post them on <a class='inline-link' href='https://dribbble.com/' target='_blank'>Dribbble</a>.",
        "I'm not the world's greatest designer, but I am always interested in design elements. Here's a couple that I am most proud of."
      ],
      projects: [
        {
          title: 'Title',
          imageUrl: '#',
          button: {
            link: '#',
          },
          creative: ['Design a shopping receipt', '15 minute design'],
          tags: ['Adobe Illustrator']
        },
        {
          title: 'Title 2',
          imageUrl: '#',
          button: {
            link: '#',
          },
          creative: ['Design a shopping receipt', '15 minute design'],
          tags: ['Adobe Illustrator']
        }
     ],
     link: 'https://dribbble.com/eugene_rayner'
    }
  }
}
</script>