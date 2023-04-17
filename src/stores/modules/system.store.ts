import { StoreEnum } from '@/config/enums'
import { defineStore } from 'pinia'

interface ISystemState {
  collapse: boolean
}

export const useSystemStore = defineStore(StoreEnum.System, {
  state: (): ISystemState => ({
    collapse: false
  }),
  actions: {
    toggleCollapse(): void {
      this.collapse = !this.collapse
    }
  }
})
