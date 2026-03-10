<script setup name="department">
import Search from '@/components/search/search.vue'
import Table from '@/components/table/table.vue'
import SearchConfig from './config/searchConfig'
import TableConfig from './config/tableConfig'
import useSystemStore from '@/stores/page/page'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import dayjs from 'dayjs'

const systemStore = useSystemStore()
const { pageList, totalCount } = storeToRefs(systemStore)
const pageInfo = reactive({
  offset: 0,
  size: 10,
})
let searchInfo = {}
systemStore.getList('department', pageInfo)
const onSearch = function (from) {
  console.log(from)
  searchInfo = from
  systemStore.getList('department', {
    ...pageInfo,
    ...from,
  })
}

const onSizeChange = function (size) {
  pageInfo.size = size
  systemStore.getList('department', {
    ...pageInfo,
    ...searchInfo,
  })
}

const onCurrentChange = function (page) {
  pageInfo.offset = (page - 1) * pageInfo.size
  systemStore.getList('department', {
    ...pageInfo,
    ...searchInfo,
  })
}
console.log(pageList.value)

const formDate = function (date, format = 'YYYY年MM月DD日 - HH:mm:ss') {
  return dayjs(date).format(format)
}

const edit = function (item) {
  console.log(item.id)
}
</script>
<template>
  <div class="department">
    <Search :searchConfig="SearchConfig" @search="onSearch"></Search>
    <Table
      :listData="pageList"
      :total="totalCount"
      :tableConfig="TableConfig"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
    >
      <template #createAt="scope">
        {{ formDate(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ formDate(scope.row.updateAt) }}
      </template>
      <template #edit="scope">
        <el-button type="primary" v-permission="'system:department:create'" @click="edit(scope.row)">
          create
        </el-button>
        <el-button type="danger" v-permission="'system:department:delete'" @click="edit(scope.row)">
          delete
        </el-button>
        <el-button type="warning" v-permission="'system:department:update'" @click="edit(scope.row)">
          update
        </el-button>
        <el-button type="success" v-permission="'system:department:query'" @click="edit(scope.row)">
          query
        </el-button>
      </template>
    </Table>
  </div>
</template>

<style scoped></style>
