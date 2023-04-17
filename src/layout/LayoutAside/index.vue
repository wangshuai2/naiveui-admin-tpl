<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed="collapse"
    :collapsed-width="layoutConfig.collapseWidth"
    :width="layoutConfig.expandWidth"
    :native-scrollbar="false"
    :on-update:collapsed="toggleCollapsed"
    class="h-screen"
    show-trigger="bar"
  >
    <layout-menu :collapsed="collapse" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import LayoutMenu from './LayoutMenu.vue'
import { useSystemStore } from '@/stores/modules/system.store'
import { storeToRefs } from 'pinia'
import { layoutConfig } from '@/config/constants/layout.constants'

const { collapse } = storeToRefs(useSystemStore())

const toggleCollapsed = () => {
  console.log('toggleCollapsed')
  useSystemStore().toggleCollapse()
}
</script>

<style scoped></style>
