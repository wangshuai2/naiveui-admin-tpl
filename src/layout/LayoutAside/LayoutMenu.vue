<template>
  <n-menu
    :options="menuOptions"
    :value="activeMenu"
    :collapsed="props.collapsed"
    accordion
    :collapsed-width="layoutConfig.collapseWidth"
    :collapsed-icon-size="layoutConfig.collapseIconSize"
    :icon-size="layoutConfig.expandIconSize"
  />
</template>

<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route.store'
import { NIcon } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { type Component, h, computed } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { layoutConfig } from '@/config/constants/layout.constants'

const props = defineProps<{
  collapsed: boolean
}>()

/**
 * @description: 生成菜单
 */
const route: RouteLocationNormalizedLoaded = useRoute()

/**
 * @description: 获取路由列表
 */
const { routesList } = storeToRefs(useRouteStore())

/**
 * @description: 渲染图标
 */
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * @description: 渲染菜单项（menu label）
 */
function renderLink(route: any) {
  const name = route.meta?.title || route.name
  if (route.children) {
    return name
  } else {
    return () => h(RouterLink, { to: route.path }, { default: () => name })
  }
}

/**
 * @description: 生成菜单
 */
const generateMenu = (routes: any) => {
  return routes.map((route: any) => {
    return {
      label: renderLink(route),
      key: route.path as string,
      show: !route.meta?.hidden,
      icon: route.meta?.icon ? renderIcon(route.meta?.icon) : null,
      children: route?.children ? generateMenu(route.children) : undefined
    }
  })
}
const menuOptions = generateMenu(routesList.value)

/**
 * @description: 获取当前激活的菜单
 */
const activeMenu = computed(() => route.meta?.activeMenu || route.fullPath)
</script>

<style scoped></style>
