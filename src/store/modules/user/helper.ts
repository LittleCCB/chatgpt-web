import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://phpimg.ziroom.com/95c9641d-2559-425a-8b5a-d787f51a6d24.jpg',
      name: 'LittleBai',
      description: '<a href="weixin://qr/gh_e011b00aab62" class="text-blue-500" target="_blank" >进群一起玩耍</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
