<template>
    <div class="project-banner">
        <iframe height="250" width="300" scrolling="no" :title="projectTitle" :src="embedUrl" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
    </div>
</template>

<script>
export default {
  name: 'Codepen',
  props: {
      embedUrl: String,
      projectTitle: String
  },
}
</script>

<style>
    .project-banner{
        text-align: center;
    }
</style>