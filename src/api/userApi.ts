import reuqest from '@/utils/request/usersReq';
import { RegisterType, LoginType, SendSmsType } from '@/typings/user';

export const register = (data: RegisterType) => {
  return reuqest.post('/user/register', data)
}

export const login = (data: LoginType) => {
  return reuqest.post('/user/login', data)
}

export const registerSendSms = (data: SendSmsType) => {
  return reuqest.post('/user/registerSendSms', data)
}