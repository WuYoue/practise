import HTTP from '../HTTP'

export function getList(url: string, data: any) {
  return HTTP.post({
    url: `/${url}/list`,
    data,
  })
}
