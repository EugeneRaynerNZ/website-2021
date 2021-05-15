import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Creations from '@/views/Creations.vue'
import Freestyler from '@/views/creations/Freestyler.vue'
import Main from '@/views/creations/Main.vue'
import Design from '@/views/Design.vue'
import Code from '@/views/Code.vue'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'
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
      { path: 'freestyler', name: 'Freestyler', component: Freestyler },
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
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
