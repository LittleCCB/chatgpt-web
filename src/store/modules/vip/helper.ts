import { ss } from '@/utils/storage'

const LOCAL_NAME = 'vipStorage'

export interface VipInfo {
  avatar: string;
  show: boolean;
}

export interface VipState {
  vipInfo: VipInfo
}

export function defaultSetting(): VipState {
  return {
    vipInfo: {
      avatar: '',
      show: false
    },
  }
}

export function getLocalState(): VipState {
  const localSetting: VipState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: VipState): void {
  ss.set(LOCAL_NAME, setting)
}
