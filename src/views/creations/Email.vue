<template>
    
    <div class="project-email">
        <Header title="Email work" :small-header="true"/>
        
        <div class="max-width">
            <router-link to="/creations/email-development" class="breadcrumb-button">
                <span class="breadcrumb-button--icon large">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
                </span>
                <span class="breadcrumb-button--text link-hover--line line-primary">Back to my emails</span> 
            </router-link>
            <Title :heading="title" />
            <template>
                <div class="iframe--container">
                    <iframe id="iframe" @load="load" scrolling="no" :title="title" :src="link" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Example',
  components: {Header, Title},
  props: {
      id: String,
  },
  data(){
      return {
          link: '',
          title: ''
      }
  },
  methods: {
    load() {
        const iFrame = document.getElementById( 'iframe' );
        iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    }
  },
   mounted(){
    if(this.$route.params.id === 'air-new-zealand'){
        this.title = 'Air New Zealand'
        this.link = '/emails/air-new-zealand/index.html'
    } else if(this.$route.params.id === 'vodafone'){
        this.title = 'Vodafone'
        this.link = '/emails/vodafone/index.html'
    } else if(this.$route.params.id === 'westpac'){
        this.title = 'Westpac'
        this.link = '/emails/westpac/index.html'
    }
    
  }
}
</script>

<style>
    #iframe{
        margin: 0 auto;
        width: 600px;
    }

    .iframe--container{
        display: flex;
        justify-content: center;
    }
</style>