import useLoginStores from '@/stores/login/login'

const permission = {
  mounted: (el: Element, binding: any) => {
    const loginStore = useLoginStores()
    const userBtn = loginStore.userBtn
    const hasPermission = userBtn.some((item: string) => item === binding.value)
    if (!hasPermission) {
      el.remove()
    }
  },
}
export default permission
