<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { NModal } from "naive-ui";
import { VipTabs } from "./";

const showModal = ref(true);

const onNegativeClick = () => {
  showModal.value = false;
};

const onPositiveClick = () => {
  window.open("https://t.zsxq.com/0csDtcatf");
  // window.open("weixin://qr/gh_e011b00aab62")
  showModal.value = false;
};

onMounted(() => {});
</script>
	
	<template>
  <div>
    <NModal
      v-model:show="showModal"
      class="modal"
      preset="dialog"
      title="支付宝扫码付款"
      positive-text="确认"
      negative-text="关闭"
      style="min-width: 35%; max-width: 75%"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    >
      扫码...
    </NModal>
  </div>
</template>
	
	<style scoped lang="less">
</style>