<template>
  <div class="intro">
      <p style="margin-bottom: 10px;" v-for="(text, index) in textArray" :key="'v-' + index" v-html="text"></p>
      <template v-if="button">
        <a  target="_blank" :href="button.link" class="main-button">
          <span class="main-button--text">{{button.text}}</span> 
          <span class="main-button--icon large">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.6 16.6" style="enable-background:new 0 0 16.6 16.6;" xml:space="preserve">
              <path class="st0" d="M14.1,14.5H2.4V2.9h5.8V1.2H2.4c-0.9,0-1.7,0.8-1.7,1.7v11.7c0,0.9,0.7,1.7,1.7,1.7h11.7c0.9,0,1.7-0.7,1.7-1.7
                  V8.7h-1.7V14.5z M9.9,1.2v1.7h3L4.7,11l1.2,1.2L14.1,4v3h1.7V1.2H9.9z"/>
              </svg>
          </span>
        </a>
      </template>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
      textArray: Array,
      button: Object
  }
}
</script>