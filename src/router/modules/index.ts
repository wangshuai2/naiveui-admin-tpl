import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { createPermissionGuard } from './guard.modules'

export const initRouteConfig = (router: Router): void => {
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      window.$loadingBar?.start()
      createPermissionGuard(to, from, next)
    }
  )

  router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    window.$loadingBar?.finish()
    console.log('afterEach', to, from)
  })
}
