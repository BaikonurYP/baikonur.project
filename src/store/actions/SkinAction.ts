import { SkinActionTypes } from '../types/SkinTypes'

export const changeSkin = () => ({ type: SkinActionTypes.CHANGE_SKIN })
export const changeSkinSuccess = (payload: string) => ({
    type: SkinActionTypes.CHANGE_SKIN_SUCCESS,
    payload,
})
