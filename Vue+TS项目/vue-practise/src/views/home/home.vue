<script setup>
import useLoginStore from '@/stores/login/login'
import { computed } from 'vue'

const loginStore = useLoginStore()
const userRoleMenu = computed(() => loginStore.userRoleMenu)

loginStore.loginAction({ name: 'coderwhy', password: '123456' })
</script>

<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <h5 class="mb-2">图片生成管理系统</h5>
        <el-menu
          default-active="2"
          active-text-color="#409EFF"
          background-color="#393649"
          text-color="#fff"
        >
          <template v-for="item in userRoleMenu">
            <el-sub-menu :index="item.id">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="value in item.children">
                <el-menu-item :index="value.id">{{ value.name }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
