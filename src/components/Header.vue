<template>
  <header>
    <div class="max-width">
      <h1>{{title}}</h1>
      <h2>{{subtitle}}</h2>
    </div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1366 74" style="enable-background:new 0 0 1366 74;" xml:space="preserve">
      <path class="background-header" d="M839.1,24c143.9-3.2,224.2,30.7,368,23c77.3-4.2,196.9-23,196.9-23V0H-36v24c0,0,277.2,51.7,456.5,50C585.1,72.4,674.5,27.6,839.1,24z"/>
    </svg>
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