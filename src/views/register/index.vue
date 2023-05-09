<script setup lang='ts'>
import { ref } from 'vue'
import { NButton, NForm, NFormItem, NInput, useMessage } from 'naive-ui'
import { register, registerSendSms } from '@/api/userApi'
import { router } from '@/router'

const message = useMessage()
const canGetCode = ref(true)
const codeBtnText = ref('获取验证码')
const formValue = ref({
  phone: '',
  pwd: '',
  smsValidateCode: '',
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
  smsValidateCode: [{ required: true, message: '验证码不能为空', trigger: ['blur'] }],
}

const formRef = ref<any>(null)

async function handleGetCode() {
  // 发送验证码的逻辑
  const { data } = await registerSendSms({
    phoneNumber: formValue.value.phone,
    validateCode: '123',
  })
  if (data.success) {
    message.success('验证码发送成功')
  }
  else {
    message.error(data.message)
    return
  }
  canGetCode.value = false
  let seconds = 60
  const timer = setInterval(() => {
    if (seconds === 0) {
      clearInterval(timer)
      canGetCode.value = true
      codeBtnText.value = '重新发送'
    }
    else {
      seconds--
      codeBtnText.value = `${seconds}秒后重发`
    }
  }, 1000)
}

function validateForm() {
  return formRef.value.validate((errors: any) => {
    if (errors)
      throw new Error('校验失败')
  })
}

async function handleSubmit() {
  try {
    await validateForm()
    // 提交注册表单的逻辑
    const { data } = await register(formValue.value)
    console.log(data)
    if (data.success) {
      message.success('注册成功，快去登录吧！')
      router.push('/login')
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
  <div class="register">
    <NForm ref="formRef" :model="formValue" :rules="rules">
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
      <NFormItem label="验证码" path="smsValidateCode">
        <div class="code-input">
          <NInput
            v-model:value="formValue.smsValidateCode"
            size="large"
            placeholder="请输入手机验证码"
          />
          <NButton
            size="large"
            style="margin-left: 10px"
            :disabled="!canGetCode"
            @click="handleGetCode"
          >
            {{ codeBtnText }}
          </NButton>
        </div>
      </NFormItem>
      <NButton class="jump" text type="primary" @click="router.push('/login')">已有账号，去登陆</NButton>
      <NFormItem style="text-align: center">
        <NButton
          style="width: 100%"
          size="large"
          type="primary"
          @click="handleSubmit"
        >
          注册
        </NButton>
      </NFormItem>
    </NForm>
  </div>
</template>

	<style scoped lang="less">
.register {
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
.code-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jump {
  transform: translateY(-6px);
}
</style>
