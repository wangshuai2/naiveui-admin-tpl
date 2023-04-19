/**
 * @title 基本请求格式
 * @description 接口数据响应基本请求格式
 *
 * @export
 * @interface IResponseBase
 * @template T
 */
export interface IResponseBase<T> {
  code: number
  success: boolean
  message: string
  data?: T
}
