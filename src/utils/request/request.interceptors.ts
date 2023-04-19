import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios'

export const requestInterceptors = (service: AxiosInstance) => {
  service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
}
