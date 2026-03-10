<script setup>
import { ref } from 'vue'
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  listData: {
    type: Array,
    default: () => [],
  },
  tableConfig: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['size-change', 'current-change'])

const currentPage = ref(1)
const handleSizeChange = (pageSize) => {
  emit('size-change', pageSize)
}
const handleCurrentChange = (currentPage) => {
  emit('current-change', currentPage)
}
</script>

<template>
  <div>
    <el-table :data="props.listData" border style="width: 100%">
      <template v-if="tableConfig.showIndexColumn">
        <el-table-column type="index" label="序号" width="60" />
      </template>
      <template v-for="item in props.tableConfig.propList">
        <el-table-column v-bind="item">
          <template v-if="item.slotName" #default="scope">
            <!-- {{ item.slotName }} -->
            <!-- {{ scope.row }} -->
            <slot :name="item.slotName" :row="scope.row">
              <!-- {{ scope.row }}
              {{ item.slotName }} -->
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
  <el-pagination
    :page-sizes="[10, 20, 30, 40]"
    layout="total, sizes, prev, pager, next, jumper"
    v-model:current-page="currentPage"
    :total="props.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style scoped></style>
