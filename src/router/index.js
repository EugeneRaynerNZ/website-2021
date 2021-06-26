import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Creations from '@/views/Creations.vue'
import CreationsWebsite from '@/views/creations/Website.vue'
import CreationsBanner from '@/views/creations/Banner.vue'
import CreationsEmail from '@/views/creations/Email.vue'
import CreationsEmailExample from '@/views/creations/email-development/Example.vue'
import Design from '@/views/Design.vue'
import Code from '@/views/Code.vue'
import Contact from '@/views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creations',
    name: 'creations',
    component: Creations,
  },
  {
    path: '/creations/website-development',
    name: 'Website Development',
    component: CreationsWebsite,
  },
  {
    path: '/creations/banner-development',
    name: 'Banner Development',
    component: CreationsBanner,
  },
  {
    path: '/creations/email-development',
    name: 'Email Development',
    component: CreationsEmail,
  },
  {
    path: '/creations/email-development/example',
    name: 'Email Example',
    component: CreationsEmailExample,
  },
  {
    path: '/design',
    name: 'Designs',
    component: Design
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
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
