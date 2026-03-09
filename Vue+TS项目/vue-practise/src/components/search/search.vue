<script setup>
import { ElDatePicker, ElInput, ElSelect } from 'element-plus'
import { reactive } from 'vue'
import { defineProps } from 'vue'

const emit = defineEmits(['search'])
const props = defineProps({
  searchConfig: {
    type: Object,
    required: true,
  },
})

const componentMap = {
  input: ElInput,
  select: ElSelect,
  datepicker: ElDatePicker,
}
const formInline = reactive({})

const onSubmit = () => {
  emit('search', formInline)
}
</script>

<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <template v-for="item in props.searchConfig.from">
        <el-form-item :label="item.label">
          <component
            :is="componentMap[item.type]"
            v-bind="item.props"
            v-model="formInline[item.prop]"
          >
            <template v-if="item.type === 'select'">
              <el-option v-bind="opt" v-for="opt in item.options" />
            </template>
          </component>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
