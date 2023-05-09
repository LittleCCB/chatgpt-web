<script setup lang='ts'>
import { ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, useMessage } from 'naive-ui'
import { useUserStore } from '@/store'
import { login } from '@/api/userApi'
import { router } from '@/router'
const message = useMessage()
const userStore = useUserStore()

const formValue = ref({
  phone: '',
  pwd: '',
})

const rules = {
  phone: [
    { required: true, message: '手机号不能为空', trigger: ['blur'] },
    {
      pattern: /^1[0-9]{10}$/,
      message: '请输入正确的手机号',
      trigger: ['input', 'blur'],
    },
  ],
  pwd: [
    { required: true, message: '密码不能为空' },
    { min: 6, max: 20, message: '密码长度应为6-20位', trigger: ['input'] },
  ],
}

const formRef = ref<any>(null)

async function validateForm() {
  try {
    return await formRef.value.validate(async (errors: any) => {
      const { data } = await login(formValue.value)
      return Promise.resolve(data)
    })
  }
  catch (error) {
    return Promise.reject(error)
  }
}

async function handleSubmit() {
  try {
    await validateForm()
    // 提交注册表单的逻辑
    const { data } = await login(formValue.value);
    if (data.success) {
      const baseUserData = data.data.baseUserData
      const loginToken = data.data.loginToken
      const userIdentityInfo = data.data.userIdentityInfo
      const newUserInfo = {
        avatar: baseUserData.attr,
        name: baseUserData.username,
        vipType: baseUserData.vipType,
        tokenName: loginToken.tokenName,
        tokenValue: loginToken.tokenValue,
        vipTypeDesc: userIdentityInfo.vipTypeDesc,
        endDate: userIdentityInfo.endDate,
      }
      userStore.updateUserInfo(newUserInfo)
      message.success('登录成功！')
      router.push('/')
    }
    else {
      message.error(data.message)
    }
  }
  catch (error) {
    console.log(error)
    message.error('验证失败')
  }
}
</script>

<template>
  <div class="login">
    <NForm ref="formRef" :model="formValue" :rules="rules" style="min-width: 320px;">
      <div class="logo">
        <img src="@/assets/pwa-512x512.png" alt="logo">
      </div>
      <NFormItem label="手机号" path="phone">
        <NInput
          v-model:value="formValue.phone"
          size="large"
          placeholder="请输入手机号"
        />
      </NFormItem>
      <NFormItem label="密码" path="pwd">
        <NInput
          v-model:value="formValue.pwd"
          size="large"
          type="password"
          placeholder="请输入密码"
        />
      </NFormItem>
      <NButton class="jump" text type="primary" @click="router.push('/register')">没有账号，去注册</NButton>
      <NFormItem style="text-align: center">
        <NButton
          style="width: 100%"
          size="large"
          type="primary"
          @click="handleSubmit"
        >
          登录
        </NButton>
      </NFormItem>
    </NForm>
  </div>
</template>

<style scoped lang="less">
.login {
  margin: 0 auto;
  height: 100vh;
  max-width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    width: 100px;
    border-radius: 8%;
    overflow: hidden;
  }
}
.jump {
  transform: translateY(-6px);
}
</style>
