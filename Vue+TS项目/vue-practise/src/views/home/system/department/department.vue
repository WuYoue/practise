<script setup name="department">
import Search from '@/components/search/search.vue'
import Table from '@/components/table/table.vue'
import SearchConfig from './config/searchConfig'
import TableConfig from './config/tableConfig'
import useSystemStore from '@/stores/page/page'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

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
    ></Table>
  </div>
</template>

<style scoped></style>
