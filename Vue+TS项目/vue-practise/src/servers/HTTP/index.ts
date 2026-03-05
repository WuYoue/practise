import axios, { type AxiosInstance } from 'axios'

class HTTP {
  instance: AxiosInstance
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
      // headers: {
      //   // Authorization
      // },
    })

    this.instance.interceptors.request.use(
      (config) => {
        // console.log('request', config)
        config.headers.Authorization = localStorage.getItem('token') ?? ''
        return config
      },
      (error) => {
        // console.log('request', error)
        return error
      },
    )

    this.instance.interceptors.response.use(
      (result) => {
        // console.log('response', config)

        return result.data
      },
      (error) => {
        // console.log('response', error)
        return error
      },
    )
  }

  request(config: any) {
    return this.instance.request(config)
  }

  get(config: any) {
    return this.request({
      ...config,
      method: 'GET',
    })
  }

  post(config: any) {
    return this.request({
      ...config,
      method: 'POST',
    })
  }
}

export default new HTTP('http://codercba.com:5000', 5000)
