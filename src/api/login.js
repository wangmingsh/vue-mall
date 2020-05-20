import request from '@/utils/request'

/*
* 获取验证码
* data
* */
export function getAuthCode(data) {
  return request({
    url:`${process.env.VUE_APP_BASE_URL}/user/authCode`,
    method: 'post',
    data
  })
}
