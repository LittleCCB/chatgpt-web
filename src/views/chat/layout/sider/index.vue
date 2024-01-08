<script setup lang='ts'>
<<<<<<< HEAD
import type { CSSProperties } from "vue";
import { computed, ref, watch } from "vue";
import { NButton, NLayoutSider } from "naive-ui";
import List from "./List.vue";
import Footer from "./Footer.vue";
import { useAppStore, useChatStore, useVipStore } from "@/store";
import { useBasicLayout } from "@/hooks/useBasicLayout";
import { PromptStore } from "@/components/common";
=======
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider, useDialog } from 'naive-ui'
import List from './List.vue'
import Footer from './Footer.vue'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore, SvgIcon } from '@/components/common'
import { t } from '@/locales'
>>>>>>> main

const appStore = useAppStore();
const chatStore = useChatStore();
const vipStore = useVipStore();

<<<<<<< HEAD
const { isMobile } = useBasicLayout();
const show = ref(false);
=======
const dialog = useDialog()

const { isMobile } = useBasicLayout()
const show = ref(false)
>>>>>>> main

const collapsed = computed(() => appStore.siderCollapsed);

function handleAdd() {
<<<<<<< HEAD
  chatStore.addHistory({ title: "New Chat", uuid: Date.now(), isEdit: false });
  if (isMobile.value) appStore.setSiderCollapsed(true);
=======
  chatStore.addHistory({ title: t('chat.newChatTitle'), uuid: Date.now(), isEdit: false })
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
>>>>>>> main
}

function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value);
}

function handleClearAll() {
  dialog.warning({
    title: t('chat.deleteMessage'),
    content: t('chat.clearHistoryConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      chatStore.clearHistory()
      if (isMobile.value)
        appStore.setSiderCollapsed(true)
    },
  })
}

const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      position: "fixed",
      zIndex: 50,
    };
  }
  return {};
});

const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: "env(safe-area-inset-bottom)",
    };
  }
  return {};
});

const vipModalShow = () => {
  vipStore.updateVipInfo({
    show: true,
  });
};

watch(
  isMobile,
  (val) => {
    appStore.setSiderCollapsed(val);
  },
  {
    immediate: true,
    flush: "post",
  }
);
</script>

<template>
  <NLayoutSider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    position="absolute"
    bordered
    :style="getMobileClass"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div class="p-4">
          <NButton dashed block @click="handleAdd">
            {{ $t("chat.newChatButton") }}
          </NButton>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
<<<<<<< HEAD
        <!-- <div class="p-4 pb-0" style="text-align: center;">
          <a href="javascript:;" @click="vipModalShow">成为VIP</a>
        </div> -->
        <div class="p-4 pb-0" style="text-align: center">
          <a href="javascript:;" @click="show = true">{{
            $t("store.siderButton")
          }}</a>
        </div>
        <div class="p-4 pb-0" style="text-align: center">
          <a href="https://github.com/LittleCCB/wx-bot-client"
            >ChatGPT接入微信工具开源项目</a
          >
        </div>
        <div class="p-4">
          <NButton block @click="vipModalShow"> 成为VIP </NButton>
=======
        <div class="flex items-center p-4 space-x-4">
          <div class="flex-1">
            <NButton block @click="show = true">
              {{ $t('store.siderButton') }}
            </NButton>
          </div>
          <NButton @click="handleClearAll">
            <SvgIcon icon="ri:close-circle-line" />
          </NButton>
>>>>>>> main
        </div>
      </main>
      <Footer />
    </div>
  </NLayoutSider>
  <template v-if="isMobile">
<<<<<<< HEAD
    <div
      v-show="!collapsed"
      class="fixed inset-0 z-40 bg-black/40"
      @click="handleUpdateCollapsed"
    />
=======
    <div v-show="!collapsed" class="fixed inset-0 z-40 w-full h-full bg-black/40" @click="handleUpdateCollapsed" />
>>>>>>> main
  </template>
  <PromptStore v-model:visible="show" />
</template>
