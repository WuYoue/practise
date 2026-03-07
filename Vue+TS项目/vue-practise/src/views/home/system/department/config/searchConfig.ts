export default {
  from: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      props: {
        placeholder: '请输入部门名称',
        clearable: true,
      },
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      props: {
        placeholder: '请输入部门领导',
        clearable: true,
      },
    },
    {
      type: 'datepicker',
      label: '创建时间',
      prop: 'createAt',
      props: {
        type: 'daterange',
        'range-separator': '到',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
      },
    },
  ],
}
