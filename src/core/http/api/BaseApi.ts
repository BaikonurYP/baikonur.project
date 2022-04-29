import { HttpCode, HTTPMethod } from "./types/HTTPTypes";
import axios, { AxiosRequestConfig } from 'axios';
import { RequestResult } from "./types/RequestResult";

/**
 * Параметры запроса
 */
type RequestOptions = {
  /** Таймаут */
  timeout?: number,
  /** Тип ответа (по умолчанию - json) */
  responseType?: 'arraybuffer'| 'document'| 'json'| 'text'| 'stream'| 'blob'
}

/** Базовое API для всех классов */
export class BaseApi{

  /** УРЛ сваггера */
  private BASE_URL: string = 'https://ya-praktikum.tech/api/v2';

  /**
   * Запрос к АПИ
   * @param url Ручка
   * @param method Ьетод
   * @param data Данные
   * @param options Параметры запроса
   * @returns Промис с данными
   */
  protected _request<T>(url: string, method: HTTPMethod, data?: Record<string, string | number> | FormData, options?: RequestOptions): Promise<RequestResult<T>>{
   return new Promise((success, reject) => {
    let config : AxiosRequestConfig = {
      url: url,
      baseURL: this.BASE_URL,
      method: method,
      withCredentials: true
    }
    if (data) config.data = data;
    if (options){
      config = Object.assign(config, options);
    }

    let result: RequestResult<T>;
    axios(config)
    .then((response) => {
      result.successes = true;
      result.code = response.status;
      if (response.data) result.data = response.data;
      success(result);
    })
    .catch((error) => {
      result.successes = false;
      if (error.code === 'ECONNABORTED'){
        result.code = HttpCode.TIMEOUT;
      }
      if (error.response) {
        result.error = error.response.data;
        if (!result.code) result.code  = error.response.status;
      }
      reject(result);
    });
   })
  }
}