<template>
  <router-link :to="link">
      <img :src="img" />
  </router-link>
</template>

<script>
export default {
  name: "Project",
  props: {
    img: String,
    link: String,
  },
};
</script>

<style>
.project--container {
  width: 100%;
  height: 300px;
  margin-bottom: 60px;
  display: flex;
  padding: 16px;
  align-items: center;
}

.project--container img{
    max-height: 100%;
}
</style>