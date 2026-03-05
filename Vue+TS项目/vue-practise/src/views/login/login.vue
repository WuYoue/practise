<script setup>
import useLoginStore from '@/stores/login/login';
import { pa } from 'element-plus/es/locales.mjs';
import { reactive } from 'vue';

const loginStore = useLoginStore();
const form = reactive({ name: '', password: '' })

const login = function () {
  console.log(form);

  loginStore.loginAction(form)
}




</script>

<template>
  <div>
    <el-input v-model="form.name" style="width: 240px" placeholder="请输入用户名" /> <br>
    <el-input v-model="form.password" type="password" show-password style="width: 240px" placeholder="请输入密码" /><br>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<style scoped></style>