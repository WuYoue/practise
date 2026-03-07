import HTTP from '../HTTP'

export function getUserList(data: any) {
  return HTTP.post({
    url: '/users/list',
    data,
  })
}
