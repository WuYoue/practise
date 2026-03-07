import { getUserList } from '@/servers/user/user'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: (): {
    usersList: any
  } => ({
    usersList: [],
  }),
  actions: {
    async getUserList(data: any) {
      const res = await getUserList(data)
      this.usersList = res.data.list
      console.log(this.usersList)
    },
  },
})

export default useUserStore
