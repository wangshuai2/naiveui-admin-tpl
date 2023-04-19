/**
 * @title 登录请求数据格式
 *
 * @export
 * @interface ISignin
 */
export interface ISignin {
  account: string
  password: string
}

/**
 * @title 登录响应数据格式
 *
 * @export
 * @interface ISigninResponse
 */
export interface ISigninResponse {
  token: string
}
