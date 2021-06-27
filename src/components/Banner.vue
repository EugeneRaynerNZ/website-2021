<template>
    <div class="project-banner">
        <p v-if="turnOffAdblock">Please turn off your Adblock and reload this page to load my example banner.</p>
        <template v-else>
            <iframe @load="detectAdBlock" :id="projectTitle" height="250" width="300" scrolling="no" :title="projectTitle" :src="embedUrl" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
            <div style="margin: 20px auto 0 auto;" class="main-button" @click="reloadIframe"><span style="padding: 0;" class="main-button--text">Reload the banner</span></div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'Codepen',
  props: {
      embedUrl: String,
      projectTitle: String,
  },
  data(){
      return {
          turnOffAdblock: false
      }
  },
  methods: {
      reloadIframe() {
          document.getElementById(this.projectTitle).src = document.getElementById(this.projectTitle).src
      },
      async detectAdBlock() {
        let adBlockEnabled = false
        const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        try {
            await fetch(new Request(googleAdUrl)).catch(() => adBlockEnabled = true)
        } catch (e) {
            adBlockEnabled = true
        } finally {
            if(adBlockEnabled){
                this.turnOffAdblock = true
            }
        }
    }
  }
}
</script>

<style>
    .project-banner{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>