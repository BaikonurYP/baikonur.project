export interface SkinState {
    image: string
    loading: boolean
    error: null | string
}

export enum SkinActionTypes {
    CHANGE_SKIN = 'CHANGE_SKIN',
    CHANGE_SKIN_SUCCESS = 'CHANGE_SKIN_SUCCESS',
    CHANGE_SKIN_ERROR = 'CHANGE_SKIN_ERROR',
}

interface ChangeSkinAction {
    type: SkinActionTypes.CHANGE_SKIN
}
interface ChangeSkinSuccessAction {
    type: SkinActionTypes.CHANGE_SKIN_SUCCESS
    payload: string
}
interface ChangeSkinErrorAction {
    type: SkinActionTypes.CHANGE_SKIN_ERROR
    payload: string
}
export type SkinAction =
    | ChangeSkinAction
    | ChangeSkinSuccessAction
    | ChangeSkinErrorAction
