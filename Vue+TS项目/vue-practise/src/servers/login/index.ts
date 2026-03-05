import HTTP from '../HTTP'

export function login(data: any) {
  return HTTP.post({
    url: '/login',
    data,
  })
}

export function getUserInfo(id: number) {
  return HTTP.get({
    url: `/users/${id}`,
  })
}

export function getUserRoles(id: number) {
  return HTTP.get({
    url: `/role/${id}/menu`,
  })
}
