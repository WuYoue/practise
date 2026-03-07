function roleMapMenu(roles: any[]) {
  const menuRoutes: any[] = []
  const allRoutes = import.meta.glob('../router/main/**/*.ts', { eager: true })
  const localRoutes = Object.values(allRoutes).map((router: any) => router.default)

  function recurseGetRoute(menus: any[]) {
    for (const menu of menus) {
      const router = localRoutes.find((route: any) => {
        return route.path === menu.url
      })

      if (router) {
        menuRoutes.push(router)
      }

      if (menu.children && menu.children.length > 0) {
        recurseGetRoute(menu.children)
      }
    }
  }
  recurseGetRoute(roles)
  console.log(menuRoutes)

  return menuRoutes
}

export default roleMapMenu
