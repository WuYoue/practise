<script setup>
import useUserStore from '@/stores/user/user'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

const formInline = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: '',
})
const pageInfo = reactive({
  offset: 0,
  size: 10,
})

const userStore = useUserStore()
const onSubmit = () => {
  userStore.getUserList({
    ...formInline,
    ...pageInfo,
  })
}

const { usersList } = storeToRefs(userStore)
</script>

<template>
  <div class="user">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.name" placeholder="请输入用户名" clearable />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="formInline.realname" placeholder="请输入真实姓名" clearable />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.cellphone" placeholder="请输入手机号" clearable />
      </el-form-item>
      <el-form-item label="状态">
        <el-select
          v-model="formInline.enable"
          placeholder="请选择状态"
          clearable
          style="width: 100%"
        >
          <el-option label="启用" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="formInline.createAt"
          type="daterange"
          unlink-panels
          range-separator="到"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="usersList" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="realname" label="真实姓名" />
      <el-table-column prop="cellphone" label="手机号" width="180" />
      <el-table-column prop="enable" label="状态" width="180" />
      <el-table-column prop="createAt" label="创建时间" />
      <el-table-column prop="updateAt" label="更新时间" />
    </el-table>
  </div>
</template>

<style lang="less" scoped></style>
