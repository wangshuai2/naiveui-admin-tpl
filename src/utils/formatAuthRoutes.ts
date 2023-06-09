import type { RouteRecordRaw } from 'vue-router'
import { resolve } from 'path-browserify'

export /**
 * @description: 生成权限路由
 * @param {RouteRecordRaw[]} routes
 * @param {string} roles
 * @return {*}  {RouteRecordRaw[]}
 */
const generateAuthRoutes = (
  routes: RouteRecordRaw[],
  roles: string,
  path?: string
): RouteRecordRaw[] => {
  const authRoutes: RouteRecordRaw[] = []
  routes?.forEach((item: RouteRecordRaw) => {
    console.log(!item.meta?.permission?.[0], !item.meta?.permission?.includes(roles))
    if (item.meta?.permission?.[0] && !item.meta?.permission?.includes(roles)) return
    const tmpPath = resolve(path || '', item.path)
    const routerItem = {
      path: tmpPath,
      name: item.name,
      component: item.component,
      redirect: item.redirect,
      children: item.children ? generateAuthRoutes(item.children, roles, tmpPath) : undefined,
      meta: item.meta
    } as RouteRecordRaw

    authRoutes.push(routerItem)
  })

  // console.log('authRoutes', authRoutes)
  return authRoutes
}
