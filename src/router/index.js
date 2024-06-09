import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Velocity from '@/views/projects/Velocity.vue'
import Freejoas from '@/views/projects/Freejoas.vue'
import BoysNight from '@/views/projects/BoysNight.vue'
// import POSForecasting from '@/views/projects/POSForecasting.vue'
import Play from '@/views/Play.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/404.vue'
import SubmissionSuccess from '@/views/SubmissionSuccess'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/velocity',
    name: 'Velocity',
    component: Velocity
  },
  {
    path: '/freejoas',
    name: 'Freejoas',
    component: Freejoas
  },
  {
    path: '/Boys-night',
    name: 'BoysNight',
    component: BoysNight
  },
  // {
  //   path: '/point-of-sale-forecasting',
  //   name: 'POSForecasting',
  //   component: POSForecasting
  // },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' },
  {
    path: '/thanks',
    name: 'success',
    component: SubmissionSuccess
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
    return { top: 0, left: 0 }
  }
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if(to !== undefined){
    document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`
  }
  next()
}) 

export default router
