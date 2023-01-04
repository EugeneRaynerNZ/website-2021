<template>
  <div>
    <header :class="smallHeader ? 'small-header' : ''">
      <div class="max-width">
        <h1 v-if="title">{{title}}</h1>
        <h2 v-if="subtitle">{{subtitle}}</h2>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
      title: String,
      subtitle: String,
      smallHeader: Boolean
  }
}
</script>