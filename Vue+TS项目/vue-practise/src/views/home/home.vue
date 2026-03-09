<script setup>
import router from '@/router'
import useLoginStore from '@/stores/login/login'
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const loginStore = useLoginStore()
const userRoleMenu = computed(() => loginStore.userRoleMenu)

const actionsIndex = ref(2)

const route = useRoute()

watchEffect(() => {
  for (const menu of userRoleMenu.value) {
    // console.log(menu.children)

    const list = menu.children.filter((item) => item.url === route.path)

    if (list.length > 0) {
      // console.log(list[0].id)

      actionsIndex.value = list[0].id

      break
    }
  }
})

const toMenu = function (value) {
  actionsIndex.value = value.id
  router.push(value.url)
}

// loginStore.loginAction({ name: 'coderwhy', password: '123456' })
</script>

<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <h5 class="mb-2">图片生成管理系统</h5>
        <el-menu
          :default-active="String(actionsIndex)"
          active-text-color="#409EFF"
          background-color="#393649"
          text-color="#fff"
        >
          <template v-for="item in userRoleMenu">
            <el-sub-menu :index="String(item.id)">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="value in item.children">
                <el-menu-item @click="toMenu(value)" :index="String(value.id)">{{
                  value.name
                }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-menu {
  /* height: 100%; */
}
</style>
