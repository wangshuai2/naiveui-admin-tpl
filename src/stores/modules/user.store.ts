import { StorageEnum, StoreEnum } from '@/config/enums'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(StoreEnum.User, {
  state: () => ({}),
  actions: {},
  persist: {
    key: StorageEnum.User,
    storage: window.sessionStorage
  }
})
