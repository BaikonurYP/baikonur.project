import { ThemeState, ThemeActionTypes, ThemeAction } from '../types/themeTypes'

export const initialState: ThemeState = {
    id: undefined,
    name: 'dark',
    user_id: undefined
}

export const themeReducer = (
    state = initialState,
    action: ThemeAction
): ThemeState => {
    switch (action.type) {
        case ThemeActionTypes.FETCH_THEME_SUCCESS:
        case ThemeActionTypes.SAVE_THEME_SUCCESS: {
            return {
                ...action.payload
            }
        }

        case ThemeActionTypes.FETCH_THEME:
        case ThemeActionTypes.FETCH_THEME_ERROR:
        case ThemeActionTypes.SAVE_THEME:
        default:
            return state
    }
}
