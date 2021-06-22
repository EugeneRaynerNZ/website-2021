<template>
    <div class="project-code">
        <iframe height="465" style="width: 100%;" scrolling="no" :title="projectTitle" :src="embedUrl" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a :href="projectUrl">3d Box</a> by Eugene
            (<a href='https://codepen.io/erayner'>@erayner</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </div>
</template>

<script>
export default {
  name: 'Codepen',
  props: {
      embedUrl: String,
      projectUrl: String,
      projectTitle: String
  }
}
</script>