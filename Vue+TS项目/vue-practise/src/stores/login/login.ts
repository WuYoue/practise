import router from '@/router'
import { getUserInfo, getUserRoles, login } from '@/servers/login'
import roleMapMenu from '@/utils/rolesMapMenu'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: (): { userRoleMenu: any[]; menuRoutes: any[] } => ({
    userRoleMenu: [],
    menuRoutes: [],
  }),
  getters: {},
  actions: {
    async loginAction(data: any) {
      const loginResult = await login(data)
      localStorage.setItem('token', loginResult.data.token)
      localStorage.setItem('id', loginResult.data.id)

      const userInfoResult = await getUserInfo(loginResult.data.id)
      //console.log(userInfoResult)

      const userRoleMenuResult = await getUserRoles(userInfoResult.data.role.id)
      console.log(userRoleMenuResult)
      this.userRoleMenu = userRoleMenuResult.data

      this.menuRoutes = roleMapMenu(this.userRoleMenu)
      this.menuRoutes.forEach((route) => router.addRoute('home', route))

      router.push('/home')
    },
    async getUserCacheInfo() {
      const userInfoResult = await getUserInfo(parseInt(localStorage.getItem('id')!))
      //console.log(userInfoResult)

      const userRoleMenuResult = await getUserRoles(userInfoResult.data.role.id)
      console.log(userRoleMenuResult)
      this.userRoleMenu = userRoleMenuResult.data

      this.menuRoutes = roleMapMenu(this.userRoleMenu)

      this.menuRoutes.forEach((route) => router.addRoute('home', route))
    },
  },
})

export default useLoginStore
