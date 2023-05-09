<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { NTabPane, NTabs, useMessage } from "naive-ui";
import { getVipPrice } from "@/api/userApi";
import { PayQrcode } from "@/components/vip";

interface VipPriceType {
  description?: string;
  discount?: number;
  nowPrice?: number;
  originalPrice?: number;
  vipType?: string;
  vipTypeDesc?: string;
}

const message = useMessage();
const vipPrice = ref([]);
const payQrcode = ref<boolean>(false);
const payQrcodeData = ref({});

const requestVipPrice = async () => {
  const { data } = await getVipPrice({});
  if (data.success) {
    vipPrice.value = data.data;
  } else {
    message.error(data.message);
  }
};

const openPayQrcode = async (vip: VipPriceType) => {
  payQrcode.value = true;
  payQrcodeData.value = vip;
};

const onCancel = () => {
  payQrcode.value = false;
  payQrcodeData.value = {};
};

const onSuccess = () => {
  payQrcode.value = false;
};

onMounted(() => {
  requestVipPrice();
});
</script>
	<template>
  <NTabs
    v-if="vipPrice.length"
    type="segment"
    :default-value="vipPrice[0].vipType"
    animated
  >
    <NTabPane
      v-for="(vipInfo, i) in vipPrice"
      :key="i"
      :name="vipInfo.vipType"
      :tab="vipInfo.vipTypeDesc"
      class="vip-card-container"
    >
      <div
        v-for="(vip, index) in vipInfo.vipPriceList"
        :key="index"
        class="vip-card"
        @click="openPayQrcode(vip)"
      >
        <div class="title">
          <span>{{ `现价：${vip.nowPrice}元` }}</span>
          <small>{{ "原价：" + vip.originalPrice }}</small>
        </div>
        <div class="desc">{{ vip.description }}</div>
      </div>
    </NTabPane>
  </NTabs>
  <PayQrcode
    v-if="payQrcode"
    :show="payQrcode"
    :data="payQrcodeData"
    @cancel="onCancel"
    @success="onSuccess"
  />
</template>
	
<style scoped lang="less">
.vip-card-container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .vip-card {
    margin: 5px 0;
    padding: 10px 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    cursor: pointer;

    .title {
      font-size: 16px;
      font-weight: 600;
    }
    span {
      margin-right: 4px;
      color: red;
    }
    small {
      font-weight: 400;
      text-decoration: line-through;
    }
    .desc {
      font-size: 14px;
    }
  }
}
</style>