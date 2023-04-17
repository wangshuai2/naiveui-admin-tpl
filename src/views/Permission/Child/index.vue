<template>
  <div>
    <h1>子页面</h1>
    <n-divider />
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = computed(() => route.meta?.title || route.name)
</script>

<style scoped></style>
