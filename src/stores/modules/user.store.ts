import { StorageEnum, StoreEnum } from '@/config/enums'
import { defineStore } from 'pinia'
import { useRouteStore } from './route.store'

interface IUserState {
  userInfo: any
  token: string
  roles: string

  [key: string]: any
}

export const useUserStore = defineStore(StoreEnum.User, {
  state: (): IUserState => ({
    userInfo: {},
    token: '',
    roles: ''
  }),
  actions: {
    login({ username, password }: { username: string; password: string }): Promise<any> {
      return new Promise((resolve, reject) => {
        if (username === 'wang' && password === '123456') {
          this.userInfo = {
            username: 'wang',
            birthday: '19921203',
            gender: 1
          }
          this.token = '123456'
          this.roles = 'admin'

          const routeStore = useRouteStore()
          routeStore.generateRoutes('admin')

          resolve(true)
        } else {
          reject()
        }
      })
    },
    logout(): Promise<any> {
      return new Promise(resolve => {
        this.userInfo = {}
        this.token = ''
        this.roles = ''
        resolve(true)
      })
    }
  },
  persist: {
    key: StorageEnum.User,
    storage: window.sessionStorage
  }
})
