<template>
  <div class="container">
    <Title :heading="title"/>

    <div class="paragraph-container">
    <div class="paragraph-block">
      
      <div class="paragraph-block--text">
        <h3>{{heading}}</h3>
        <p>{{paragraph}}</p>
      </div>

      <router-link :to="button.link" class="main-button">
        <span class="main-button--text">{{button.text}}</span> 
        <span class="main-button--icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7.4 12" style="enable-background:new 0 0 7.4 12;" xml:space="preserve">
            <path class="st0" d="M1.4,0L0,1.4L4.6,6L0,10.6L1.4,12l6-6L1.4,0z"/>
          </svg>
        </span>
      </router-link>
      
    </div>
    <div class="paragraph-tags">
      <h3>Main Skills Used</h3>
      <Tag v-for="(tag, index) in tags" :key="'v- '+ index" :name="tag"/>
    </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Tag from '@/components/Tag.vue'

export default {
  name: 'Paragraph',
  props: {
      title: String,
      heading: String,
      paragraph: String,
      button: Object,
      tags: Array
  },
  components: {
    Title,
    Tag
  }
}
</script>

<style>
  .container{
    margin-bottom: 80px;
  }
  .paragraph-container{
    display: flex;
  }
  .paragraph-block{
    flex: 0 0 70%;
      margin-bottom: 80px;
      padding-right: 20px;
  }

  .paragraph-block--text h3{
      font-size: 24px;
  }

  .paragraph-block--text p{
      margin-top: 8px;
  }

  .paragraph-block--button{
      margin-top: 15px;
  }

  .paragraph-block--button a{
      color: red;
  }

  .paragraph-tags{
     flex: 1;
  }

  .paragraph-tags h3{
    font-size: 20px;
    margin-bottom: 8px;
  }
</style>