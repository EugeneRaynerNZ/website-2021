<template>
    <div class="project-email">
        <router-link to="/creations/Email" class="breadcrumb-button">
            <span class="breadcrumb-button--icon large">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
            </span>
            <span class="breadcrumb-button--text">Back to my creations</span> 
        </router-link>
        <Title :heading="title" />
        <template v-if="link">
            <iframe height="100%" width="600" scrolling="no" :src="link" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
        </template>
    </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
      title: String
  },
  data(){
      return {
          link: '/emails/VOD0452_Vodafone_TV_Welcome/VOD0452_Vodafone_TV_Welcome.html'
      }
  },
}
</script>

<style>
    .project-email{
        display: flex;
        flex-direction: column;
    }
</style>