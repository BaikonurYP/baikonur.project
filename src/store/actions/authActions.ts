import { AuthActionTypes } from '../types/authTypes'

export const changeAuthSuccess = (payload: boolean) => ({
    type: AuthActionTypes.CHANGE_AUTH_SUCCESS,
    payload,
})
