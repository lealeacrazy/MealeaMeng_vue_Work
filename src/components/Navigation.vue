<template>
  <nav class="h-16 flex w-10/12 m-auto  items-center justify-between">
    <div id="nav-item" class="flex items-center gap-12 hover:text-blue-500 font-bold">
      <navigation-item 
      v-for="item in navItems" 
      :key="item.label" 
      :item="item"
      :to="item.path">
    </navigation-item>
    
    </div>
    
  </nav>
</template>

<script setup>
import NavigationItem from "./NavigationItem.vue";
import { ref } from "vue";

const navItems = ref([
  { label: "Home", path: "/"},
  { label: "About", path: "/about"},
  { label: "Contact", path: "/contact" }
  
]);
</script>

<style lang="scss" scoped>
</style>