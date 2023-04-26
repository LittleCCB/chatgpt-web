<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { HoverButton, SvgIcon, UserAvatar } from '@/components/common'

const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

const show = ref(false)
</script>

<template>
  <footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
    <div class="flex-1 flex-shrink-0 overflow-hidden">
      <UserAvatar />
    </div>


    <HoverButton @click="show = true">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="ri:settings-4-line" />
      </span>
    </HoverButton>

    <Setting v-if="show" v-model:visible="show" />
  </footer>
  <div>&emsp;游客身份限制提问频率，<a href="#/register" class="text-blue-500" target="_blank" >注册请点这里</a></div>
</template>
