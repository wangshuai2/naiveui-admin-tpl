import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { checkStatus } from './checkStatus'

export const responseInterceptors = (service: AxiosInstance) => {
  service.interceptors.response.use(
    (response: AxiosResponse) => {
      const { code, message, data } = response.data

      if (code === 0) {
        return data
      } else {
        return Promise.reject(new Error(message || 'Error'))
      }
    },
    (error: AxiosError) => {
      const message = ''
      const status = error.response?.status || 0
      checkStatus(status, message)

      return Promise.reject(error)
    }
  )
}
