<template>
  <div id="contact">
    <Header title="Like what you see?" subtitle="Let's have a chat :)" :small-header="true"/>
    
    <div class="max-width">
      <div class="form">
        <form class="form--container" name="contact" netlify>
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
import Header from '@/components/Header.vue'

export default {
  name: 'Contact',
  data() {
      return {}
  },
  components: {
    Header
  }
}
</script>

<style>
.form {
  box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.1);
}

.form--container{
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.form--container-details{
    display: flex;
    justify-content: space-between;
}

.form--container label{
    margin: 0 0 20px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex: 0 0 49%
}

.form--container label span{
    display: block;
    padding-bottom: 10px;
}

.form--container label input{
    
    padding: 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    outline: none;
    border-width: 0;
    background-color: #f8f6ff;
    padding: 10px;
}

.form--container label textarea{
    width: auto !important;
    max-width: 100%;
    outline: none;
    border-width: 0;
    background-color: #f8f6ff;
    padding: 10px;
    min-height: 150px;
}

.submit{
    outline: none;
    border-width: 0;
    background-color: #ff4b33;
    color: white;
    align-self: flex-start;
    
}
</style>