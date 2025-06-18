<template>
  <div>
    <nav class="bg-blue-300 text-white p-4 flex gap-4 justify-center">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/about" class="hover:underline">About</router-link>
      <router-link to="/contact" class="hover:underline">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>


</script>
