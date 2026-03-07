<script setup lang="ts">
import { computed, toRefs, watch, watchEffect } from 'vue'
import useLoginStore from './stores/login/login'
import roleMapMenu from './utils/rolesMapMenu'

// const loginStore = useLoginStore()
// const { userRoleMenu } = toRefs(loginStore)
// watchEffect(() => {
//   roleMapMenu(userRoleMenu.value)
// })

// console.log(userRoleMenu)

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
