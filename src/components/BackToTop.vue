<template>
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="back-to-top"
    >
      ↑
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      handleScroll() {
        this.isVisible = window.scrollY > 200;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #6533ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block; /* Ensures it displays correctly */
    transition: all 0.3s;
    }

    .back-to-top:hover {
    background-color: #391d8e;
    }

    .back-to-top[v-cloak] {
        display: none; /* Prevent flickering */
    }
  </style>
  