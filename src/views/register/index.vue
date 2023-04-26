<script setup lang='ts'>
import { ref } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

const message = useMessage();
const canGetCode = ref(true);
const codeBtnText = ref("获取验证码");
const formValue = ref({
  phone: "",
  password: "",
  code: "",
});

const rules = {
  phone: [
    { required: true, message: "手机号不能为空", trigger: ["blur"] },
    {
      pattern: /^1[0-9]{10}$/,
      message: "请输入正确的手机号",
      trigger: ["input", "blur"],
    },
  ],
  password: [
    { required: true, message: "密码不能为空" },
    { min: 6, max: 20, message: "密码长度应为6-20位", trigger: ["input"] },
  ],
  code: [{ required: true, message: "验证码不能为空", trigger: ["blur"] }],
};

const formRef = ref<any>(null);

function handleGetCode() {
  // 发送验证码的逻辑
  canGetCode.value = false;
  let seconds = 60;
  const timer = setInterval(() => {
    if (seconds === 0) {
      clearInterval(timer);
      canGetCode.value = true;
      codeBtnText.value = "重新发送";
    } else {
      seconds--;
      codeBtnText.value = `${seconds}秒后重发`;
    }
  }, 1000);
}

function validateForm() {
  return formRef.value.validate((errors: any) => {
    if (errors) {
      throw Error("校验失败");
    }
  });
}

async function handleSubmit() {
  try {
    await validateForm();
    message.success("验证成功");
    // 提交注册表单的逻辑
  } catch (error) {
    console.log(error);
    message.error("验证失败");
  }
}
</script>
	
	<template>
  <div class="register">
    <NForm :model="formValue" :rules="rules" ref="formRef">
      <div class="logo">
        <img src="@/assets/pwa-512x512.png" alt="logo" />
      </div>
      <NFormItem label="手机号" path="phone">
        <NInput
          size="large"
          v-model:value="formValue.phone"
          placeholder="请输入手机号"
        ></NInput>
      </NFormItem>
      <NFormItem label="密码" path="password">
        <NInput
          size="large"
          type="password"
          v-model:value="formValue.password"
          placeholder="请输入密码"
        ></NInput>
      </NFormItem>
      <NFormItem label="验证码" path="code">
        <div class="code-input">
          <NInput
            size="large"
            v-model:value="formValue.code"
            placeholder="请输入手机验证码"
          ></NInput>
          <n-button
            size="large"
            style="margin-left: 10px"
            :disabled="!canGetCode"
            @click="handleGetCode"
            >{{ codeBtnText }}</n-button
          >
        </div>
      </NFormItem>
      <NFormItem style="text-align: center">
        <n-button
          style="width: 100%"
          size="large"
          type="primary"
          @click="handleSubmit"
          >注册</n-button
        >
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
</style>