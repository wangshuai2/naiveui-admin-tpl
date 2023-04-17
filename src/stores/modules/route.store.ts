import { StoreEnum } from '@/config/enums'
import { router } from '@/router'
import { PERMISSION_ROUTES } from '@/router/routes/permission.routes'
import { generateAuthRoutes } from '@/utils/formatAuthRoutes'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

interface IRouteState {
  /**
   * @description 路由列表
   */
  routesList: RouteRecordRaw[]
  /**
   * @description 缓存路由列表
   */
  routesKeepAliveList: string[]
}

export /** @type {*} */
const useRouteStore = defineStore(StoreEnum.Route, {
  state: (): IRouteState => ({
    routesList: [],
    routesKeepAliveList: []
  }),
  actions: {
    /**
     * @description: 生成权限路由
     * @param {string} roles
     */
    generateRoutes(roles: string) {
      const authRoutes: RouteRecordRaw[] = generateAuthRoutes(PERMISSION_ROUTES, roles)
      this.routesList = authRoutes

      authRoutes?.forEach(item => {
        router.addRoute('Root', item)
      })
    },
    /**
     * @description: 重置路由
     */
    routerReset(): void {
      this.routesList = []
    }
  }
})
