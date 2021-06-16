import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Creations from '@/views/Creations.vue'
import Website from '@/views/creations/Website.vue'
import Banner from '@/views/creations/Banner.vue'
import Email from '@/views/creations/Email.vue'
import Main from '@/views/creations/Main.vue'
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
    name: 'Creations',
    component: Creations,

    children: [
      { path: '', name: 'Creations', component: Main },
      { path: 'website-development', name: 'Website', component: Website },
      { path: 'banner-development', name: 'Banner', component: Banner },
      { path: 'email-development', name: 'Email', component: Email },
    ]
  },
  {
    path: '/design',
    name: 'Design',
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

export default router
