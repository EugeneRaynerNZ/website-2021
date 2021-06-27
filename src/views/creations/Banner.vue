<template>
    <div class="website">
    <Header title="HTML5 Banners" :small-header="true"/>
    <div class="max-width">
      <div>
            <router-link to="/creations" class="breadcrumb-button">
                <span class="breadcrumb-button--icon large">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
                </span>
                <span class="breadcrumb-button--text">Back to my creations</span> 
                
            </router-link>
        </div>
        <div class="project" v-for="project in projects" :key="'v-' + project.name">
            <Title :heading="project.name" />
            <Banner :embedUrl="project.banner.embedUrl" :projectTitle="project.banner.projectTitle"/>
            <div class="content">
                <div class="creative">
                    <h3>Creative Input</h3>
                    <p v-for="(creative, index) in project.creative" :key="'v-' + index">{{creative}}</p>
                </div>
                <div class="built-with">
                    <h3>Built With</h3>
                    <div class="tags">
                        <div class="tag" v-for="tag in project.tags" :key="'v-' + tag">
                            <span class="tag--text">{{tag}}</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Title from '@/components/Title.vue'
import Banner from '@/components/Banner.vue'

// import Aai from '.'

export default {
  name: 'Website',
  components: {Header, Title, Banner},
  data() {
      return {
          projects: [
            {
              name: 'AA Insurance',
              banner: {
                embedUrl: '/banners/aai/index.html',
                projectTitle: 'AAI'
              },
              creative: [
                  'AA Insurance is New Zealands most trusted insurance provider.',
                  'These banners were built using the usual HTML/CSS but with custom Javascript and Greensock.',
                  'The banners have a unique confetti animation and needed to be a small file size for the Google Display Network.'
              ],
              link: 'aa-insurance',
              tags: ['HTML5', 'CSS', 'Custom Javascript', 'Greensock']
            },
            {
              name: 'Crown Casinos Australia',
              banner: {
                embedUrl: '/banners/crown/index.html',
                projectTitle: 'Crown Casinos'
              },
              creative: [
                  'The Crown Casinos are a chain of Casinos operating in Australia. The banners images and animations are made to represent their logo.'
              ],
              link: 'crown-casinos',
              tags: ['HTML5', 'CSS', 'Greensock']
            },
            {
              name: 'nib New Zealand',
              banner: {
                embedUrl: '/banners/nib/families_template_300x250.html',
                projectTitle: 'nib Insurance'
              },
              creative: [
                  'This campaign was targeted at those looking to enter a compeition - win a Fitbit.',
                  'They are built using Adobe Animate and then custom coded for the Google Display Network.',
                  'The banners have two versions, one for English speakers, the other for Mandarin speakers.'
              ],
              link: 'nib',
              tags: ['Adobe Animate', 'Google Display']
            }
          ]
      }
  }
}
</script>