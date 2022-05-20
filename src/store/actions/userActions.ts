import { User, UserActionTypes } from '../types/userTypes'

export const fetchUser = () => ({
    type: UserActionTypes.FETCH_USER
})
export const fetchUserSuccess = (payload: User) => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload
})
export const fetchUserError = (payload: string) => ({
    type: UserActionTypes.FETCH_USER_ERROR,
    payload
})
