<template>
  <div class="title">
      <span>{{heading}}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
      heading: String,
  }
}
</script>