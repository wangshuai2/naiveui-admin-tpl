<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
    >
      <layout-menu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>header</n-layout-header>
      <n-layout-content>
        <n-breadcrumb />
        <h1>n-layout-content</h1>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import LayoutMenu from '@/layout/LayoutMenu/index.vue'
</script>

<style scoped lang="scss"></style>
