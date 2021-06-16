<template>
    <div class="website">
    <Header title="HTML5 Banners" :small-header="true"/>
    <div class="max-width">
        <div class="project" v-for="project in projects" :key="'v-' + project.name">
            <h2>{{project.name}}</h2>
            <div class="content">
                <div class="creative">
                    <h3>Creative Input</h3>
                    <p v-for="(creative, index) in project.creative" :key="'v-' + index">{{creative}}</p>
                    <router-link target="_blank" :to="project.link" class="main-button">
                        <span class="main-button--text">View the banners</span> 
                        <span class="main-button--icon">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7.4 12" style="enable-background:new 0 0 7.4 12;" xml:space="preserve">
                            <path class="st0" d="M1.4,0L0,1.4L4.6,6L0,10.6L1.4,12l6-6L1.4,0z"/>
                          </svg>
                        </span>
                    </router-link>
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

export default {
  name: 'Website',
  components: {Header},
  data() {
      return {
          projects: [
            {
              name: 'AA Insurance',
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
              creative: [
                  'The Crown Casinos are a chain of Casinos operating in Australia. The banners images and animations are made to represent their logo.'
              ],
              link: 'crown-casinos',
              tags: ['HTML5', 'CSS', 'Greensock']
            },
            {
              name: 'nib New Zealand',
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

<style>
.project{
    margin: 50px 0 150px 0;
}
.project h2{
    font-size: 36px;
}
.project h3{
    font-size: 24px;
    margin-top: 30px;
}
.project .content{
    width: 100%;
    display: flex;
}

.project .content p{
    margin-top: 10px;
}

.project .content .creative{
    flex: 0 1 80%;
    padding-right: 40px;
}

.project .content .built-with{
    flex: 1 0 20%;
}
</style>