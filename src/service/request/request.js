import axios from "axios";
import store from "@/store";
import {message} from "ant-design-vue";
class YCRequest {
  config = null;
  interceptorHooks = null;
  showLoading = true;
  instance = null;
  showReault = false; //操作成功提示符
  constructor(options) {
    this.config = options;
    this.interceptorHooks = options.interceptorHooks;
    this.showLoading = options.showLoading ?? true;
    this.showReault = options.showReault ?? false;
    this.instance = axios.create(options);
    this.setupInterceptor();
  }
  //全局响应拦截
  setupInterceptor() {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    );

    this.instance.interceptors.request.use((config) => {
      this.showLoading && store.commit("changeSpinning", true); //控制spin
      return config;
    });
    //全局响应成功失败拦截
    this.instance.interceptors.response.use(
      (res) => {
        //响应成功拦截
        store.commit("changeSpinning", false);
        return res;
      },
      (err) => {
        //响应失败拦截
        store.commit("changeSpinning", false);
        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    );
  }

  request(config) {
    this.showLoading = config.showLoading;
    this.showReault = config.showReault;
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
          this.showLoading = true;
        })
        .catch((err) => {
          reject(err);
          message.error(err.code);
          this.showLoading = true;
        });
    });
  }

  get(config) {
    return this.request({
      showReault: false,
      showLoading: true,
      ...config,
      method: "GET"
    });
  }

  post(config) {
    return this.request({
      showReault: true,
      showLoading: true,
      ...config,
      method: "POST"
    });
  }

  delete(config) {
    return this.request({
      showReault: true,
      showLoading: true,
      ...config,
      method: "DELETE"
    });
  }

  patch(config) {
    return this.request({
      showReault: false,
      showLoading: true,
      ...config,
      method: "PATCH"
    });
  }
}

export default YCRequest;
