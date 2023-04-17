<template>
  <n-layout has-sider>
    <layout-aside />
    <n-layout>
      <n-layout-content>
        <layout-header />
        <n-breadcrumb />
        <h1>n-layout-content</h1>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import LayoutAside from '@/layout/LayoutAside/index.vue'
import LayoutHeader from '@/layout/LayoutHeader/index.vue'
</script>

<style scoped lang="scss"></style>
