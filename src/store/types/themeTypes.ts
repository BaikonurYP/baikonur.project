export interface ThemeState {
    id?: number
    name?: string
    user_id?: number
}

export enum ThemeActionTypes {
    FETCH_THEME = 'FETCH_THEME',
    FETCH_THEME_SUCCESS = 'FETCH_THEME_SUCCESS',
    FETCH_THEME_ERROR = 'FETCH_THEME_ERROR',
    SAVE_THEME = 'SAVE_THEME',
    SAVE_THEME_SUCCESS = 'SAVE_THEME_SUCCESS',
    SAVE_THEME_ERROR = 'SAVE_THEME_ERROR',
}
export interface FetchThemeAction {
    type: ThemeActionTypes.FETCH_THEME
    payload: any
}
export interface FetchThemeSuccessAction {
    type: ThemeActionTypes.FETCH_THEME_SUCCESS
    payload: any[]
}
export interface FetchThemeErrorAction {
    type: ThemeActionTypes.FETCH_THEME_ERROR
    payload: string
}

export interface SaveThemeAction {
    type: ThemeActionTypes.SAVE_THEME
    payload: any
}
export interface SaveThemeSuccessAction {
    type: ThemeActionTypes.SAVE_THEME_SUCCESS
    payload: any
}
export interface SaveThemeErrorAction {
    type: ThemeActionTypes.SAVE_THEME_ERROR
    payload: string
}

export type ThemeAction =
    | FetchThemeAction
    | FetchThemeSuccessAction
    | FetchThemeErrorAction
    | SaveThemeAction
    | SaveThemeSuccessAction
    | SaveThemeErrorAction
