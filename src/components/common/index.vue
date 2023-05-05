<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { NModal } from 'naive-ui'
import QRCode from 'qrcode'

const showModal = ref(false)
const qrCodeImage = ref(null)
const canvas = ref(null)

const onNegativeClick = () => {
  showModal.value = false
}

onMounted(() => {
  showModal.value = true
  QRCode.toCanvas(canvas.value, 'www.baidu.com', (error: any) => {
    if (error)
      console.error(error)
  })
})
</script>

<template>
  <div>
    <NModal
      v-model:show="showModal"
      class="modal"
      preset="dialog"
      title=""
      style="min-width: 35%; max-width: 75%"
    >
      <div class="pay-box">
        <canvas ref="canvas" />
        <img :src="qrCodeImage" alt="QR Code">
      </div>
    </NModal>
  </div>
</template>

<style scoped lang="less">
.pay-box {
  position: relative;
  canvas {
    width: 500px;
  }
  img {
    width: 500px;
  }
}
</style>
