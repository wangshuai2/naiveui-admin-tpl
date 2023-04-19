import type { IResponseBase } from '@/interface'
import type { IResetPwd, ISignin, ISignup, ISignupResponse } from '@/interface/sign'
import { http } from '@/utils/request'

export /**
 * @title 登陆接口
 * @description 登陆接口请求
 *
 * @param {ISignin} data
 * @return {*}
 */
const signinRequest = (data: ISignin) => {
  return http.post<IResponseBase<string>>('/signin', data)
}

export /**
 * @title 注册接口
 * @description 注册接口请求
 *
 * @param {ISignup} data
 * @return {*}
 */
const signupReq = (data: ISignup) => {
  return http.post<IResponseBase<ISignupResponse>>('/signup', data)
}

export /**
 * @title 重置密码
 * @description 重置密码接口请求
 *
 * @param {IResetPwd} data
 * @return {*}
 */
const resetPwdReq = (data: IResetPwd) => {
  return http.post<IResponseBase<string>>('/resetPwd', data)
}
