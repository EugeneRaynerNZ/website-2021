<template>
  <header>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
      title: String,
      subtitle: String
  }
}
</script>