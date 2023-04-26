<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { NButton, NModal } from 'naive-ui'
const showModal = ref(false)

const onNegativeClick = () => {
  showModal.value = false
}

const onPositiveClick = () => {
  window.open('https://t.zsxq.com/0c8ZrSR0z')
  showModal.value = false
}

onMounted(() => {
  showModal.value = true
})
</script>

<template>
  <div>
    <NModal
      v-model:show="showModal"
      :mask-closable="false"
      class="modal"
      preset="dialog"
      title="Ctrl+D 收藏本站"
      positive-text="加入AI变现知识星球"
      negative-text="暂时关闭"
      style="min-width: 25%;max-width: 75%;"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    >
      <div class="modal-box">
        <div class="group-qrcode">
          <img src="https://oss-chatgpt.oss-cn-beijing.aliyuncs.com/attr/xq.jpg" alt="wxPay">
          <NButton type="primary" size="small" ghost>
            <a href="https://t.zsxq.com/0c8ZrSR0z">加入AI变现知识星球</a>
          </NButton>
        </div>
        <div class="group-qrcode">
          <img src="https://oss-chatgpt.oss-cn-beijing.aliyuncs.com/attr/qun.jpg" alt="wxPay">
          <NButton type="primary" size="small" ghost>
            <a href="weixin://qr/gh_e011b00aab62">加入体验群聊&捣糨糊</a>
          </NButton>
        </div>
      </div>
    </NModal>
  </div>
</template>

<style scoped lang="less">
.modal-box {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media only screen and (max-width:750px) {
    .modal-box {
      flex-direction: column;
    }
}
.group-qrcode {
  padding: 2%;
  margin: 2%;
  border-style: solid;
  border-width: 1px;
  border-color: #18a058;
  border-radius: 5%;
  text-align: center;
    img{
        width:250px;
        margin-bottom: 3%;
        border-radius: 5%;
    }
}
</style>
