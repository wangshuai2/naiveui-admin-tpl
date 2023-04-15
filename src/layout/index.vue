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
      <n-menu />
    </n-layout-sider>
    <n-header>header</n-header>
    <n-layout-content>
      <n-breadcrumb />
      <h1>n-layout-content</h1>
      <router-view />
    </n-layout-content>
    <n-footer>footer</n-footer>
  </n-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
