import { ThemeState, ThemeActionTypes } from '../types/themeTypes'

export const fetchTheme = (payload: number) => ({
    type: ThemeActionTypes.FETCH_THEME,
    payload,
})
export const fetchThemeSuccess = (payload: ThemeState) => ({
    type: ThemeActionTypes.FETCH_THEME_SUCCESS,
    payload,
})
export const fetchThemeError = (payload: string) => ({
    type: ThemeActionTypes.FETCH_THEME_ERROR,
    payload,
})

export const saveTheme = (payload: ThemeState) => ({
    type: ThemeActionTypes.SAVE_THEME,
    payload,
})

export const saveThemeSuccess = (payload: ThemeState) => ({
    type: ThemeActionTypes.SAVE_THEME_SUCCESS,
    payload,
})

export const saveThemeError = () => ({
    type: ThemeActionTypes.SAVE_THEME_ERROR,
})
