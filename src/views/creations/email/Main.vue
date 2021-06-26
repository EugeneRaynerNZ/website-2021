<template>
  <div id="creations">
    <Header title="My Emails" :small-header="true"/>
    {{$route.params.project}}
    <main class="max-width">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'EmailExamples',
  components: {
    Header
  },
}
</script>