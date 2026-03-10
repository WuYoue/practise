<script setup>
import useUserStore from '@/stores/user/user'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import Search from '@/components/search/search.vue'
import SearchConfig from './config/SearchConfig'

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

const currentPage = ref(1)

const userStore = useUserStore()
userStore.getUserList({
  ...pageInfo,
})

const onSearch = (form) => {
  console.log(form)

  currentPage.value = 1
  userStore.getUserList({
    offset: 0,
    size: 10,
    ...form,
  })
}

const handleSizeChange = (val) => {
  pageInfo.size = val
  userStore.getUserList({
    ...pageInfo,
    ...formInline,
  })
}

const handleCurrentChange = (val) => {
  pageInfo.offset = (val - 1) * pageInfo.size
  userStore.getUserList({
    ...pageInfo,
    ...formInline,
  })
}

const { usersList, totalCount } = storeToRefs(userStore)
</script>

<template>
  <div class="user">
    <Search :searchConfig="SearchConfig" @search="onSearch"></Search>
    <el-table :data="usersList" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="realname" label="真实姓名" />
      <el-table-column prop="cellphone" label="手机号" width="180" />
      <el-table-column prop="enable" label="状态" width="180" />
      <el-table-column prop="createAt" label="创建时间" />
      <el-table-column prop="updateAt" label="更新时间" />
      <el-table-column label="操作">
        <el-button
          type="primary"
          v-permission="'system:department:create'"
          @click="edit(scope.row)"
        >
          create
        </el-button>
        <el-button type="danger" v-permission="'system:department:delete'" @click="edit(scope.row)">
          delete
        </el-button>
        <el-button
          type="warning"
          v-permission="'system:department:update'"
          @click="edit(scope.row)"
        >
          update
        </el-button>
        <el-button type="success" v-permission="'system:department:query'" @click="edit(scope.row)">
          query
        </el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      v-model:current-page="currentPage"
      :total="totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="less" scoped></style>
