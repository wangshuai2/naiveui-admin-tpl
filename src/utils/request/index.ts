import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { requestInterceptors } from './request.interceptors'
import { responseInterceptors } from './response.interceptors'

const service: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 5000
})

requestInterceptors(service)
responseInterceptors(service)

export default service

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
  patch<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.patch(url, data, config)
  },
  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  }
}
