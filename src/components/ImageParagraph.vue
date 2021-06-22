<template>
  <div class="paragraph-image-block" :class="reverse ? 'reverse' : ''">
     <div class="paragraph-image-block--text">
        <h3>{{title}}</h3>
        <p v-for="(paragraph, index) in paragraphs" :key="'paragraph-' + index" v-html="paragraph"></p>
        <template v-if="link">
          <router-link :to="link" class="main-button">
            <span class="main-button--text">{{linkText}}</span> 
            <span class="main-button--icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7.4 12" style="enable-background:new 0 0 7.4 12;" xml:space="preserve">
                <path class="st0" d="M1.4,0L0,1.4L4.6,6L0,10.6L1.4,12l6-6L1.4,0z"/>
              </svg>
            </span>
          </router-link>
        </template>
      </div>
      <Icon :name="image"/>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'Paragraph',
  components: {
    Icon
  },
  props: {
      title: String,
      paragraphs: Array, 
      image: String,
      reverse: Boolean,
      link: String,
      linkText: String,
  }
}
</script>