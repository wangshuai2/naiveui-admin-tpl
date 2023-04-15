import { StoreEnum } from '@/config/enums'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore(StoreEnum.System, {
  state: () => ({}),
  actions: {}
})
