<script setup lang="ts">
import { da } from 'element-plus/es/locales.mjs'
import HTTP from './servers/HTTP'

// HTTP.post({
//   url: '/login',
//   data: {
//     "name": "coderwhy",
//     "password": "123456"
//   }
// }).then((res) => {
//   console.log(res);
// });
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>
