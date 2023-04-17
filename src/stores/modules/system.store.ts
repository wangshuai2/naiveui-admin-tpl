import { StoreEnum } from '@/config/enums'
import { clsStorage } from '@/utils/storage'
import { defineStore } from 'pinia'

interface ISystemState {
  collapse: boolean
}

export const useSystemStore = defineStore(StoreEnum.System, {
  state: (): ISystemState => ({
    collapse: !!clsStorage.get('COLLAPSED')
  }),
  actions: {
    toggleCollapse(): void {
      this.collapse = !this.collapse
      clsStorage.set('COLLAPSED', this.collapse)
    }
  }
})
