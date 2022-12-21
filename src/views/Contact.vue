<template>
  <div id="contact">
    <div class="max-width">
      <Title :heading="'Contact me'"/>
      <div class="form">
        <form method="POST" class="form--container" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div class="form--container-details">
            <label>
              <span>Full Name</span>
              <input type="text" name="name">
            </label>
            <label>
              <span>Email Address</span>
              <input type="email" name="email">
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Type something nice here"></textarea>
          </label>

          <button type="submit" class="main-button submit">
            <span class="main-button--text">Contact me</span> 
            <span class="main-button--icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7.4 12" style="enable-background:new 0 0 7.4 12;" xml:space="preserve">
                <path class="st0" d="M1.4,0L0,1.4L4.6,6L0,10.6L1.4,12l6-6L1.4,0z"/>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'Contact',
  data() {
      return {}
  },
  components: {
    Title
  }
}
</script>