/**
 * 小程序监控
 */
export class MiniProgramMonitor {
  /**
   * 小程序请求地址
   */
  requestUrl:string
  constructor(requestUrl:string){
    this.requestUrl = requestUrl
  }
  /**初始化 */
  init=()=>{}
  /**正常日志 */
  info = (...params:any[])=>{
  console.log(params)
  }
  /**告警日志 */
  warning = (...params:any[])=>{
    console.log(params)
  }
  /**报错日志 */
  error = (...params:any[])=>{
    console.log(params)
  }
  
}