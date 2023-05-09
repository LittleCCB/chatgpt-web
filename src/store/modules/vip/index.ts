import { defineStore } from 'pinia'
import type { VipInfo, VipState } from './helper'
import { defaultSetting, getLocalState, setLocalState } from './helper'

export const useVipStore = defineStore('vip-store', {
  state: (): VipState => getLocalState(),
  actions: {
    updateVipInfo(userInfo: Partial<VipInfo>) {
      this.vipInfo = { ...this.vipInfo, ...userInfo }
    },

    resetVipInfo() {
      this.vipInfo = { ...defaultSetting().vipInfo }
    },

    recordState() {
      setLocalState(this.$state)
    },
  },
})
