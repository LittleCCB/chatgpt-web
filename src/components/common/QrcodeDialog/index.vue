<script setup lang='ts'>
	import { onMounted, ref } from 'vue'
	import { NModal } from 'naive-ui'
	const showModal = ref(false)
	const windowWidth = ref(0)
	
	const onNegativeClick = () => {
	  showModal.value = false
	}
	
	const onPositiveClick = () => {
	  window.open('https://t.zsxq.com/0csDtcatf');
    // window.open("weixin://qr/gh_e011b00aab62")
	  showModal.value = false
	}
	
	onMounted(() => {
	  showModal.value = true
	  windowWidth.value = window.innerWidth
	})
	</script>
	
	<template>
	  <div>
		<NModal
		  v-model:show="showModal"
		  class="modal"
		  preset="dialog"
		  title="Ctrl+D 收藏本站"
		  positive-text="了解更多AIGC技术"
		  negative-text="暂时关闭"
		  style="min-width: 35%;max-width: 75%;"
		  @positive-click="onPositiveClick"
		  @negative-click="onNegativeClick"
		>
		  <div class="modal-box">
			<div class="group-qrcode">
			  <img src="https://phpimg.ziroom.com/d857b9b4-bbb6-460e-ba69-a9e1028cb9ce.jpg" alt="wxPay">
			  <!-- <NButton type="primary" size="small" ghost> -->
				<!-- <a href="https://t.zsxq.com/0c8ZrSR0z">我知道了</a> -->
				<a>加群体验微信版AI</a>
			  <!-- </NButton> -->
			</div>
			<div class="group-qrcode">
			  <div v-if="windowWidth <= 768">
				<img src="@/assets/qrcode.png" alt="wxPay">
			  	<a>加入星球了解更多AI技术</a>
			  </div>
			  <img v-else src="https://oss-chatgpt.oss-cn-beijing.aliyuncs.com/attr/model.gif" alt="wxPay">
			  <!-- <NButton type="primary" size="small" ghost>
				<a href="https://support.weixin.qq.com/cgi-bin/mmsupport-bin/addchatroombyinvite?ticket=AyYqmfSlm7KBGSemBz2ZbA%3D%3D">加入体验群聊&捣糨糊</a>
			  </NButton> -->
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
	  // border-style: solid;
	  // border-width: 1px;
	  // border-color: #18a058;
	  // border-radius: 5%;
	  text-align: center;
		img{
			width:200px;
			margin-bottom: 3%;
		}
	}
</style>