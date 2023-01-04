import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import VelocityCRM from '@/views/projects/VelocityCRM.vue'
import POSForecasting from '@/views/projects/POSForecasting.vue'
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
    path: '/velocity-crm',
    name: 'VelocityCRM',
    component: VelocityCRM
  },
  {
    path: '/point-of-sale-forecasting',
    name: 'POSForecasting',
    component: POSForecasting
  },
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
