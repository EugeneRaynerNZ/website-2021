import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'
import Play from '@/views/Play.vue'
// import Creations from '@/views/Creations.vue'
// import CreationsWebsite from '@/views/velocity.vue'
// import CreationsBanner from '@/views/creations/Banner.vue'
// import CreationsEmails from '@/views/creations/Emails.vue'
// import CreationsEmail from '@/views/creations/Email.vue'
// import Design from '@/views/Design.vue'
// import Code from '@/views/Code.vue'
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
    path: '/:id',
    name: 'Project',
    component: Project
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
