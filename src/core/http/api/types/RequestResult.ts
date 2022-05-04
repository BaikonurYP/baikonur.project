import { HttpCode } from './HTTPTypes'

/** Результат запроса к API */
export type RequestResult<T> = {
    /** Флаг - запрос выполнен успешно */
    successes?: boolean
    /** Код ответа */
    code?: HttpCode
    /** Данные */
    data?: T
    /** Текст ошибки */
    error?: any
}
