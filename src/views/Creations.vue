<template>
  <div id="creations">
    <Header title="I love to create." subtitle="Check out some creations below" :small-header="true"/>
    <main class="max-width">
      <Paragraph 
      v-for="(type, index) in types"
      :key="'project-' + index"
      :title="type.title" 
      :heading="type.heading" 
      :paragraph="type.paragraph" 
      :button="type.button"
      :tags="type.tags"
      />
      <router-view/>
    </main>
  </div>
  
</template>

<script>
import Header from '@/components/Header.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
  name: 'Creations',
  components: {
    Header,
    Paragraph
  },
  data() {
    return {
      types: [
        { 
          title: 'Website Design & Development',
          heading: 'Grow your brand and have an online presence',
          paragraph: 'Need a website and don’t know where to start? I can help! I can create custom websites that you can update and manage, and it’s easy!',
          button: {
            link: 'creations/website-development',
            text: 'View my websites'
          },
          tags: ['CSS (SCSS)', 'Javascript', 'VueJS']
        },
        {
          title: 'HTML5 Banners',
          heading: 'Increase brand awareness & visits to your website',
          paragraph: 'Advertising banners increase your brand awareness and visits to your website by appearing in ad space all over the internet.',
          button: {
            link: 'creations/banner-development',
            text: 'View my banners'
          },
          tags: ['HTML5', 'CSS', 'Javascript', 'Greensock', 'Adobe Animate']
        },
        {
          title: 'Email Development',
          heading: 'The most cost effective type of marketing',
          paragraph: 'Emails that stand out and work on all major devices are key to growing your business. Increase website traffic & potential customers at almost no cost with email marketing.',
          button: {
            link: 'creations/email-development',
            text: 'View my emails'
          },
          tags: ['HTML5', 'CSS', 'Responsive', 'Litmus', 'Email on Acid']
        }
      ]
    }
  },
}
</script>