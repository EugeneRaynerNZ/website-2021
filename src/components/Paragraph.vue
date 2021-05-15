<template>
  <div class="paragraph-block">
    <div class="paragraph-block--text">
      <h3>{{title}}</h3>
      <p>{{paragraph}}</p>
    </div>
      
      <div class="paragraph-block--button">
        <router-link :to="button.link">{{button.text}}</router-link>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
      title: String,
      paragraph: String,
      button: Object
  }
}
</script>

<style>
    .paragraph-block{
        margin-bottom: 80px;
    }

    .paragraph-block--text h3{
        font-size: 36px;
    }

    .paragraph-block--text p{
        margin-top: 8px;
    }

    .paragraph-block--button{
        margin-top: 15px;
    }

    .paragraph-block--button a{
        color: red;
    }
</style>