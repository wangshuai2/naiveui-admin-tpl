<template>
  <n-dialog-provider>
    <n-notification-provider>
      <n-message-provider>
        <slot />
      </n-message-provider>
    </n-notification-provider>
  </n-dialog-provider>
</template>

<script setup lang="ts"></script>

<style scoped></style>
