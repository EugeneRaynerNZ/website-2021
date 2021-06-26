<template>
    <div class="project-email">
        <main>
            <router-link to="/creations/Email" class="breadcrumb-button">
                <span class="breadcrumb-button--icon large">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
                </span>
                <span class="breadcrumb-button--text">Back to my creations</span> 
            </router-link>
            <Title :heading="title" />
            <template v-if="embedUrl">
                <iframe height="100%" width="600" scrolling="no" :src="embedUrl" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
            </template>
        </main>
    </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
      title: String,
      embedUrl: String,
  },
  methods: {
      reloadIframe() {
          document.getElementById(this.projectTitle).src = document.getElementById(this.projectTitle).src
      }
  }
}
</script>

<style>
    .project-email{
        display: flex;
        flex-direction: column;
    }
</style>