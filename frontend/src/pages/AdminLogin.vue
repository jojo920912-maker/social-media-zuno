<!-- eslint-disable no-unused-vars -->
<script setup>
import LoginForm from '@/components/LoginForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import logo from '@/assets/icon.png'
import { NButton, useMessage } from 'naive-ui'
const message = useMessage()

const name = '後台登入'
const router = useRouter()

async function adminLogin(account, password) {
  try {
    const { data } = await axios.post('/api/admin/signin', {
      account,
      password
    })
    localStorage.setItem('adminToken', data.token)
    localStorage.setItem('role', 'admin')
    localStorage.setItem('user', JSON.stringify(data.user))
    router.push('/admin/posts')
  } catch(error) {
    message.error('帳號或密碼錯誤')
  }
}

</script>

<template>
  <div class='allPages'>
    <div class='loginCard'>
      <img
        class='logo'
        :src='logo'
      >
      <LoginForm
        msg='登入頁面'
        :on-login='adminLogin'
        :title='name'
      />
      <div class='button'>
        <n-button
          text
          text-color='#0080FF'
          @click='router.push("/login")'
        >
          前台登入
        </n-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.allPages {
  min-height: 100vh;
  background-color: #ffffff;
  padding: 40px 16px;
  box-sizing: border-box;
}

.loginCard {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.logo {
  width: 50px;
  height: 50px;
}

.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

</style>
