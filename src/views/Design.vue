<template>
  <div id="designs">
    <Header title="Designing is my second nature." subtitle="Check out some designs below"  :small-header="true"/>
    <main class="max-width">
      <Intro :textArray="introduction" :button="introButton"/>
      
      <div class="project" v-for="project in projects" :key="'v-' + project.name">
        <Title :heading="project.name"/>
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

    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Title from '@/components/Title.vue'
import ProjectImage from '@/components/ProjectImage.vue'
import Tag from '@/components/Tag.vue'

import Dailyui12 from '@/assets/project-examples/design/dailyui-12.jpg'
import Dailyui17 from '@/assets/project-examples/design/dailyui-17.jpg'

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
        "I create quick, 15 minute designs for <a class='inline-link link-hover--line line-primary' href='https://www.dailyui.co/' target='_blank'>DailyUI</a> and post them on <a class='inline-link link-hover--line line-primary' href='https://dribbble.com/' target='_blank'>Dribbble</a>.",
        "I am always interested in design elements. Here's a couple that I am most proud of."
      ],
      introButton: {
        text: 'Check out my Dribble',
        link: 'https://dribbble.com/eugene_rayner'
      },
      projects: [
        {
          name: 'eCommerce Item',
          imageUrl: Dailyui12,
          button: {
            link: 'https://dribbble.com/shots/15825057-DailyUI-12-Single-Part-Item',
          },
          creative: [
            'This task was to create an item page for a shopping website. I have used an image from my current workplace - Naveya & Sloane.',
            'I limit myself to only a short period of time when designing DailyUI. I use it get into the zone for the rest of the day. This design took only 15 minutes.'
          ],
          tags: ['Adobe Illustrator']
        },
        {
          name: 'Online Shopping Receipt',
          imageUrl: Dailyui17,
          button: {
            link: 'https://dribbble.com/shots/15870354-DailyUI-17-Receipt',
          },
          creative: [
            'This task was to create a shopping receipt for an item purchased digitally.',
            'I limit myself to only a short period of time when designing DailyUI. I use it get into the zone for the rest of the day. This design took only 15 minutes.'
          ],
          tags: ['Adobe Illustrator', 'Freepik']
        }
     ],
    }
  }
}
</script>