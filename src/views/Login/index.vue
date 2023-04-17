<template>
  <div class="flex h-screen justify-center items-center bg-gray-50">
    <div class="shadow-lg w-96 p-20 rounded-lg bg-white">
      <h1 class="text-center">登录</h1>
      <n-form ref="loginRef" :model="loginForm" label-placement="left" :label-width="60">
        <n-form-item label="用户名" path="username">
          <n-input v-model:value="loginForm.username" placeholder="用户名" />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input v-model:value="loginForm.password" type="password" placeholder="密码" />
        </n-form-item>
        <n-divider />
        <n-form-item>
          <n-button type="primary" block @click="handleLoginBtn">登录</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user.store'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

// 用户store
const userStore = useUserStore()

// router
const router = useRouter()

// 登录表单ref
const loginRef = ref(null)
// 登录表单数据
const loginForm = reactive({
  username: 'wang',
  password: '123456'
})

// 点击了登录按钮
const handleLoginBtn = () => {
  console.log(loginForm)
  userStore.login(loginForm).then(() => {
    console.log('登录成功')
    router.replace('/')
  })
}
</script>

<style scoped lang="scss"></style>
