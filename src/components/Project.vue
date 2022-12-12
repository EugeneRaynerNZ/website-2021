<template>
  <router-link :to="link">
    <div class="project--container" :style="{ backgroundColor: this.color }">
      <img :src="img" />
      <p>{{ name }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Project",
  props: {
    name: String,
    img: String,
    color: String,
    link: String
  },
};
</script>

<style>
.project--container {
  width: 100%;
  height: 200px;
  margin-bottom: 60px;
  display: flex;
  padding: 16px;
  align-items: center;
}

.project--container img{
    max-height: 100%;
}
</style>