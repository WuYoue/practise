import { getList } from '@/servers/system/system'
import { defineStore } from 'pinia'

const usePageStore = defineStore('user', {
  state: (): {
    pageList: any
    totalCount: number
  } => ({
    pageList: [],
    totalCount: 0,
  }),
  actions: {
    async getList(url: string, data: any) {
      const res = await getList(url, data)
      console.log(res)

      this.pageList = res.data.list
      this.totalCount = res.data.totalCount
      console.log(this.pageList)
      console.log(this.totalCount)
    },
  },
})

export default usePageStore
