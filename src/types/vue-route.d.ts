import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 用于显示在侧边栏及导航栏的标题
     */
    title: string

    /**
     * 用于跳转外链的地址
     */
    href?: string

    /**
     * 用于显示在侧边栏的图标
     */
    icon?: any

    /**
     * 是否缓存页面
     */
    cache?: boolean

    /**
     * 深度
     */
    deepth?: number

    /**
     * 是否需要登录
     */
    requiteAuth?: boolean

    /**
     * 权限
     */
    permission?: string[]

    /**
     * 当前url隐藏时，显示激活的菜单
     */
    activeMenu?: string

    /**
     * 是否隐藏
     */
    hidden?: boolean
  }
}
