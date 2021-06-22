<template>
  <div class="intro">
      <p style="margin-bottom: 10px;" v-for="(text, index) in textArray" :key="'v-' + index" v-html="text"></p>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
      textArray: Array,
  }
}
</script>