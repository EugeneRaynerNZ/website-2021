<template>
    <div class="project-example">
        <a v-if="url" :href="url" target="_blank">
            <img :src="src" />
        </a>
        <img v-else :src="src" />
    </div>
</template>

<script>
export default {
  name: 'ProjectImage',
  props: {
    src: String,
    url: String
  },
}
</script>

<style scoped>
.project-example{
    width: 100%;
    box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.project-example img{
    max-width: 100%;
}
</style>