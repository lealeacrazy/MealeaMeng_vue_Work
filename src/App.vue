<template>
  <header class="shadow-md">
    <Navigation />
    <div class="flex gap-6">
        <NavigationItem v-for="item in navItems" :key="item.label" :item="item" />
      </div>
      <NavigationItem :item="{ label: 'Login', path: '/login', icon: 'login' }" />
  </header>
  
  <router-view></router-view>
</template>
<script setup>
// components impor
import Navigation from "./components/Navigation.vue";
import { ref } from "vue";

const navItems = ref([
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About', path: '/about', icon: 'info' },
  { label: 'Contact', path: '/contact', icon: 'call' },
])
</script>
