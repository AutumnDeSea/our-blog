export default interface BaseResponse<T = unknown> {
  data: T,
  code?: number,
  success: boolean,
  msg?: string,
}
  