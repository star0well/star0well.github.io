import YCRequest from "./request/request";
import {API_BASE_URL, TIME_OUT} from "./request/config";

const ycRequest = new YCRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    //设置请求头
    requestInterceptor: (config) => {
      // config.headers["Content-Type"] = "application/json";
      // config.headers["Is-AppOrP"] = "pc";
      return config;
    },
    //设置请求头失败
    requestInterceptorCatch: (err) => {
      return err;
    },
    //给ycRequest设置单独响应成功拦截
    responseInterceptor: (res) => {
      //通过后端返回状态码判断状态 失败返回reject
      return res.data;
    },
    //设置响应失败拦截
    responseInterceptorCatch: (err) => {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
  }
});
export default ycRequest;
