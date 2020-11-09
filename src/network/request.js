import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  // 2.axios的拦截器(请求成功 失败 相应成功 失败 一共四种)
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  }) 
  // 请求拦截
  instance.interceptors.response.use(res => {
    // console.log(res.data)
    return res.data
    // 返回一个data就行了 接着在main的then位置处理 在这里相当于做了一个提取data的转化
  }, err => {
    console.log(err)
    // url不存在会响应失败
  })
  // 响应拦截

  // 3.发送真正的网络请求
  return instance(config)
}
