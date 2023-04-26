<script setup lang='ts'>
import { ref } from "vue";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";

const message = useMessage();
const formValue = ref({
  phone: "",
  password: ""
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
};

const formRef = ref<any>(null);

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
  <div class="login">
    <NForm :model="formValue" :rules="rules" style="min-width: 320px;" ref="formRef">
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
      <NFormItem style="text-align: center">
        <n-button
          style="width: 100%"
          size="large"
          type="primary"
          @click="handleSubmit"
          >登录</n-button
        >
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
</style>