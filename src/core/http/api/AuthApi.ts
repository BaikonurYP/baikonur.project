import { BaseApi } from "./BaseApi";
import { HTTPMethod } from "./types/HTTPTypes";
import { RequestResult } from "./types/RequestResult";
import { SwaggerUserInfo } from "./types/SwaggerTypes";

export class AuthApi extends BaseApi {
  /**
   * Регистрация
   * @param data Регистрационные данные
   */
  signUp(data: {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
  }
  ) : Promise<{id: number}> {
    return new Promise<{id: number}>((resolve, reject) => {
      this._request<{id: number}>('auth/signup', HTTPMethod.POST, data).then(result => {
        resolve(result.data);
      })
      .catch((err: RequestResult<any>) => {
        /** Обработку ошибок добавим позже по мере выполнения */
        reject(err.error);
      })
    });
  }

  /**
   * Авторизация
   * @param data Данные для входа
   */
  signIn(data: {
    login: string,
    password: string
  }) {
    return new Promise<string>((resolve, reject) => {
      this._request<string>('auth/signin', HTTPMethod.POST, data).then(result => {
        resolve(result.data);
      })
      .catch((err: RequestResult<any>) => {
        reject(err.error);
      })
    });
  }

  /** Получить текущего юзера */
  user(){
    return new Promise<SwaggerUserInfo>((resolve, reject) => {
      this._request<SwaggerUserInfo>('auth/user', HTTPMethod.GET).then(result => {
        resolve(result.data);
      })
      .catch((err: RequestResult<any>) => {
        reject(err.error);
      })
    });
  }

  /** Выход */
  logout(){
    return new Promise<string>((resolve, reject) => {
      this._request<string>('auth/logout', HTTPMethod.POST).then(result => {
        resolve(result.data);
      })
      .catch((err: RequestResult<any>) => {
        reject(err.error);
      })
    });
  }
}