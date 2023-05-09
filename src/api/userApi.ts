import reuqest from '@/utils/request/usersReq'
import type { LoginType, RegisterType, SendSmsType, CreateOrderReq } from '@/typings/user'

export const register = (data: RegisterType) => {
  return reuqest.post('/user/register', data)
}

export const login = (data: LoginType) => {
  return reuqest.post('/user/login', data)
}

export const registerSendSms = (data: SendSmsType) => {
  return reuqest.post('/user/registerSendSms', data)
}

export const getVipPrice = (data: any) => {
  return reuqest.get('/memberships/getVipPrice', data)
}

export const createOrder = (data: CreateOrderReq) => {
  return reuqest.post('/order/create', data);
}

export const orderQuery = (data: { orderId: string }) => {
  return reuqest.post('/order/query', data);
}

export const getUserInfo = () => {
  return reuqest.get('/user/get')
}

