<template>
  <n-config-provider>
    <Application>
      <RouterView />
    </Application>
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Application from './components/Application/Application.vue'
</script>

<style scoped></style>
