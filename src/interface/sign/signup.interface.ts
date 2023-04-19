/**
 * @title 注册接口请求数据格式
 *
 * @export
 * @interface ISignup
 */
export interface ISignup {
  account: string
  password: string
  repeat_password: string
}

/**
 * @title 注册接口响应数据格式
 *
 * @export
 * @interface ISignupResponse
 */
export interface ISignupResponse {
  id: number
  account: string
  password: string
  username: string | null
  lastLogin: string | null
  status: boolean
  createdAt: string
  updatedAt: string
  deleted: boolean
}
