<template>
    <div class="website">
    <Header title="Websites" :small-header="true"/>
    
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
            <ProjectImage :url="project.link" :src="project.imageUrl"/>
            <div class="content">
                <div class="creative">
                    <h3>Creative Input</h3>
                    <p v-for="(creative, index) in project.creative" :key="'v-' + index">{{creative}}</p>
                    <a style="margin-top: 20px;" target="_blank" :href="project.link" class="main-button">
                        <span class="main-button--text">View the website</span> 
                        <span class="main-button--icon large">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.6 16.6" style="enable-background:new 0 0 16.6 16.6;" xml:space="preserve">
                            <path class="st0" d="M14.1,14.5H2.4V2.9h5.8V1.2H2.4c-0.9,0-1.7,0.8-1.7,1.7v11.7c0,0.9,0.7,1.7,1.7,1.7h11.7c0.9,0,1.7-0.7,1.7-1.7
                                V8.7h-1.7V14.5z M9.9,1.2v1.7h3L4.7,11l1.2,1.2L14.1,4v3h1.7V1.2H9.9z"/>
                            </svg>
                        </span>
                    </a>
                </div>
                <div class="built-with">
                    <h3>Built With</h3>
                    <div class="tags">
                        <Tag v-for="tag in project.tags" :key="'v-' + tag" :name="tag"/>
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
import ProjectImage from '@/components/ProjectImage.vue'
import Tag from '@/components/Tag.vue'

import DentalArtistry from '@/assets/project-examples/websites/dental-artistry.png'
import Jesters from '@/assets/project-examples/websites/jesters.png'
import Fanz from '@/assets/project-examples/websites/fanz.png'

export default {
  name: 'Website',
  components: {Header, Title, ProjectImage, Tag},
  data() {
      return {
          projects: [
            {
                name: 'Jesters Pies NZ',
                imageUrl: Jesters,
                creative: [
                    'Kiwis (New Zealanders) love pies, and Jester’s Pies is well known.',
                    'My task was to take their original website, and reskin it.',
                    'The website is built using Silverstripe, a content management system built by kiwis.'
                ],
                link: 'https://jesters-pies.co.nz/',
                tags: ['Silverstripe', 'Slick Slider', 'Custom Javascript', 'CSS (SCSS)']
            },
            {
                name: 'Dental Artistry',
                imageUrl: DentalArtistry,
                creative: [
                    'Dental artistry is a unique, high quality dentist.',
                    'The website is full of animated and scrollable interactive elements, grabbing the attention of customers.',
                    'The site is built using Wordpress meaning the company itself manages the site’s content.'
                ],
                link: 'https://dentalartistry.co.nz/',
                tags: ['Wordpress', 'Bootstrap', 'Slick Slider', 'Contact Form 7', 'Greensock']
            },
            {
                name: 'Franchise Association of NZ - Conference Website',
                imageUrl: Fanz,
                creative: [
                    'The Franchise Association of New Zealand is a company that helps franchisee’s manage their work.',
                    'This website was built to provide a platform for upcoming events.',
                    'The website was built using Wordpress, so that the Franchise Association could manage the content themselves.'
                ],
                link: 'https://conference.franchiseassociation.org.nz/',
                tags: ['Wordpress', 'Bootstrap', 'Contact Form 7']
            }
          ]
      }
  }
}
</script>