<template>
  <router-link class="project--container" :to="link">
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
  /* margin-bottom: 60px; */
  display: flex;
  align-items: center;
  transition: all 0.4s;
  border-radius: 8px;
}

.project--container:hover{
    transform: scale(1.0065);
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.35);
}

.project--container img{
    max-width: 100%;
    border-radius: 8px;
}
</style>