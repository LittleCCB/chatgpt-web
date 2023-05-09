<script setup lang='ts'>
import { onMounted, ref, defineProps, defineEmits } from "vue";
import { NModal, useMessage } from "naive-ui";
import { createOrder, orderQuery, getUserInfo } from "@/api/userApi";
import { useVipStore, useUserStore } from "@/store";
import QRCode from "qrcode";
import { router } from "@/router";

const vipStore = useVipStore();
const userStore = useUserStore();

const message = useMessage();
const showModal = ref(false);
const qrCodeImage = ref(null);
const canvas = ref(null);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(["cancel", "success"]);

const onNegativeClick = () => {
  showModal.value = false;
  emit("cancel");
};

const reqCreateOrder = async () => {
  const { data } = await createOrder({
    vipType: props.data.vipType || "Gold_VIP",
    monthStr: props.data.month,
  });
  console.log(data);
  if (data.success) {
    QRCode.toCanvas(canvas.value, data.data.payUrl, (error: any) => {
      if (error) {
        message.error("二维码生成失败，请重试");
        return;
      }
    });
    withImageLoad(data.data.orderId);
  } else {
    if (data.status === -1) {
      router.push('/login')
    }
    message.error(data.message);
  }
};

const setUserInfo = () => {
  return new Promise((resolve, reject) => {
    getUserInfo()
      .then(({ data }) => {
        console.log("orderQuery res:", data);
        if (data.success) {
          const baseUserData = data.data.baseUserData;
          const userIdentityInfo = data.data.userIdentityInfo;
          const newUserInfo = {
            avatar: baseUserData.attr,
            name: baseUserData.username,
            vipType: baseUserData.vipType,
            vipTypeDesc: userIdentityInfo.vipTypeDesc,
            endDate: userIdentityInfo.endDate,
          };
          userStore.updateUserInfo(newUserInfo);
          resolve(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const withImageLoad = async (orderId: any, time = 0) => {
  if (time > 150) {
    message.error("支付超时，请重试");
    return;
  }
  setTimeout(async () => {
    const { data } = await orderQuery({
      orderId,
    });
    if (!data.success) {
      message.error(data.message);
      return;
    }
    if (data.data === "Finish") {
      message.success("支付成功");
      vipStore.updateVipInfo({
        show: false,
      });
      setUserInfo();
      emit("success");
      return;
    }
    if (data.data === "Pending") {
      withImageLoad(orderId, time++);
    }
  }, 2000);
};

onMounted(async () => {
  showModal.value = props.show;
  await reqCreateOrder();
});
</script>

<template>
  <div>
    <NModal
      v-model:show="showModal"
      class="modal"
      preset="dialog"
      title="支付宝扫码支付"
      negative-text="关闭"
      style="max-width: 75%"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    >
      <div class="pay-box">
        <canvas ref="canvas" />
      </div>
    </NModal>
  </div>
</template>

<style scoped lang="less">
.pay-box {
  position: relative;
  display: flex;
  justify-content: center;

  canvas {
    width: 500px;
  }
  img {
    width: 500px;
  }
}
</style>
