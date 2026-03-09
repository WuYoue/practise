import { ElInput } from 'element-plus'

export default {
  from: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名',
      props: { placeholder: '请输入用户名', clearable: true },
    },
    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      props: { placeholder: '请输入真实姓名', clearable: true },
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '手机号',
      props: { placeholder: '请输入手机号' },
      clearable: true,
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
        clearable: true,
      },
    },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',
      props: { placeholder: '请选择状态', clearable: true, style: 'width: 120px' },
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 },
      ],
    },
  ],
}
