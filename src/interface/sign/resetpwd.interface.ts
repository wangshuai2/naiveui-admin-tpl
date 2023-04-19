/**
 * @title 重置密码接口
 *
 * @export
 * @interface IResetPwd
 */
export interface IResetPwd {
  account: string
  oldPassword: string
  newPassword: string
  repeatPassword: string
}
