<template>
  <div id="creations">
    <Header title="I love to create." subtitle="Check out some creations below"/>
    {{$route.params.project}}
    <Paragraph 
      v-for="(project, index) in projects"
      :key="'project-' + index"
      :title="project.title" 
      :paragraph="project.paragraph" 
      :button="project.button"
      />
      <router-view/>
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
      projects: [
        { 
          title: 'Title',
          paragraph: 'When I was younger, I loved creating music. I used a program called Ableton Live and my friend and I used to get together over a few drinks and create raps and a backing track. Recently i’ve been inspired by an up and coming artist named Harry Mack. He’s the best freestyler I have ever come across. I thought it would be handy for other inspiring musicians if there was a freestyle application that spat out subjects over a backing track of their choosing so I created the Harry Mack Freestyling App.',
          button: {
            link: 'creations/freestyler',
            text: 'Check it out'
          }
        },
        {
          title: 'Title 2',
          paragraph: 'When I was younger, I loved creating music. I used a program called Ableton Live and my friend and I used to get together over a few drinks and create raps and a backing track. Recently i’ve been inspired by an up and coming artist named Harry Mack. He’s the best freestyler I have ever come across. I thought it would be handy for other inspiring musicians if there was a freestyle application that spat out subjects over a backing track of their choosing so I created the Harry Mack Freestyling App.',
          button: {
            link: 'creations/freestyler',
            text: 'Check it out'
          }
        }
      ]
    }
  },
}
</script>