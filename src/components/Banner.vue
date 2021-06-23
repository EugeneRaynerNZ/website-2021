<template>
    <div class="project-banner">
        <iframe :id="projectTitle" height="250" width="300" scrolling="no" :title="projectTitle" :src="embedUrl" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
        <div style="margin: 20px auto 0 auto;" class="main-button" @click="reloadIframe"><span style="padding: 0;" class="main-button--text">Reload the banner</span></div>
    </div>
</template>

<script>
export default {
  name: 'Codepen',
  props: {
      embedUrl: String,
      projectTitle: String,
  },
  methods: {
      reloadIframe() {
          document.getElementById(this.projectTitle).src = document.getElementById(this.projectTitle).src
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