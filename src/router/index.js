import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/page/Home.vue";
import About from "@/page/About.vue";
import Contact from '@/page/Contact.vue';



const routes = [
  { path: '/', 
    name: 'Home', 
    components: Home
},
  { 
    path: '/about', 
    name: 'About', 
    components: About
},
  { path: '/contact', 
    name: 'Contact', 
    components: Contact
},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
