import router from '@/router'
import { getUserInfo, getUserRoles, login } from '@/servers/login'
import roleMapMenu from '@/utils/rolesMapMenu'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: (): { userRoleMenu: any[]; menuRoutes: any[]; userBtn: any[] } => ({
    userRoleMenu: [],
    menuRoutes: [],
    userBtn: [],
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
      console.log(this.menuRoutes)

      this.userBtn = []
      const getBtn = (menuList: any) => {
        for (const item of menuList) {
          if (item.children?.length > 0) {
            getBtn(item.children)
          } else if (item.permission) {
            this.userBtn.push(item.permission)
          }
        }
      }
      getBtn(userRoleMenuResult.data)
      console.log(this.userBtn)

      this.menuRoutes.forEach((route) => router.addRoute('home', route))

      router.push('/home')
    },
    async getUserCacheInfo() {
      const userInfoResult = await getUserInfo(parseInt(localStorage.getItem('id')!))
      //console.log(userInfoResult)

      const userRoleMenuResult = await getUserRoles(userInfoResult.data.role.id)
      console.log(userRoleMenuResult)
      this.userBtn = []

      const getBtn = (menuList: any) => {
        for (const item of menuList) {
          if (item.children?.length > 0) {
            getBtn(item.children)
          } else if (item.permission) {
            this.userBtn.push(item.permission)
          }
        }
      }
      getBtn(userRoleMenuResult.data)
      console.log(this.userBtn)

      this.userRoleMenu = userRoleMenuResult.data

      this.menuRoutes = roleMapMenu(this.userRoleMenu)
      console.log(this.menuRoutes)

      this.menuRoutes.forEach((route) => router.addRoute('home', route))
    },
  },
})

export default useLoginStore
