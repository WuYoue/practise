import router from '@/router'
import { getUserInfo, getUserRoles, login } from '@/servers/login'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    userRoleMenu: [],
  }),
  getters: {},
  actions: {
    async loginAction(data: any) {
      const loginResult = await login(data)
      localStorage.setItem('token', loginResult.data.token)

      const userInfoResult = await getUserInfo(loginResult.data.id)
      //console.log(userInfoResult)

      const userRoleMenuResult = await getUserRoles(userInfoResult.data.role.id)
      console.log(userRoleMenuResult)
      this.userRoleMenu = userRoleMenuResult.data

      router.push('/home')
    },
  },
})

export default useLoginStore
