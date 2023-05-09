export interface RegisterType {
  "phone": string,
  "pwd": string,
  "smsValidateCode": string,
  "domain"?: string
}

export interface LoginType {
  "phone": string,
  "pwd": string,
}

export interface SendSmsType {
  phoneNumber: string;
  validateCode: any;
}

export interface CreateOrderReq {
  vipType: string;
  monthStr: string;
}