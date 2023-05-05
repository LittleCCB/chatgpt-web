import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
  vipType: String
  tokenName: String
  tokenValue: String
  endDate: String
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://oss-chatgpt.oss-cn-beijing.aliyuncs.com/attr/%E5%A4%B4%E5%83%8F.jpg',
      name: '程序员小野',
      description: '星球： <a href="https://t.zsxq.com/0c8ZrSR0z" class="text-blue-500" target="_blank" > ChatGPT风口软件变现</a>',
      vipType: '-',
      tokenName: '-',
      tokenValue: '-',
      endDate: '-',
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
