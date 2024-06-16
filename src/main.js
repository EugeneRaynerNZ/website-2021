import Vue from 'vue'
import App from './App.vue'
import './style/style.css';
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// In your main.js or a similar entry file
 // eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Force reflow by accessing the offsetHeight
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.style.display = 'none';
    appElement.offsetHeight; // Force reflow
    appElement.style.display = '';
  }
});