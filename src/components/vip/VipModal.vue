<script setup lang='ts'>
import { onMounted, ref, defineProps } from "vue";
import { NModal } from "naive-ui";
import { useVipStore } from "@/store";
import { VipTabs } from "./";

const vipStore = useVipStore();

const showModal = ref(false);

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const onNegativeClick = () => {
  showModal.value = false;
  vipStore.updateVipInfo({
    show: false,
  });
};

const onPositiveClick = () => {
  // window.open("https://t.zsxq.com/0csDtcatf");
  showModal.value = false;
  vipStore.updateVipInfo({
    show: false,
  });
};

onMounted(() => {
  showModal.value = props.show;
});
</script>
	
	<template>
  <div>
    <NModal
      v-model:show="showModal"
      class="modal"
      preset="dialog"
      title="成为VIP"
      positive-text="确认"
      negative-text="关闭"
      style="min-width: 35%; max-width: 75%"
      :mask-closable="false"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
      @on-after-leave="onPositiveClick"
    >
      <VipTabs />
    </NModal>
  </div>
</template>
	
	<style scoped lang="less">
</style>