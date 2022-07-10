import { SkinAction, SkinActionTypes, SkinState } from '../types/SkinTypes'

export const initialState: SkinState = {
    image: null,
    loading: false,
    error: null
}

export const skinReducer = (
    state = initialState,
    action: SkinAction
): SkinState => {
    switch (action.type) {
        case SkinActionTypes.CHANGE_SKIN:
            return { loading: true, error: null, image: null }

        case SkinActionTypes.CHANGE_SKIN_SUCCESS: {
            return { loading: false, error: null, image: action.payload }
        }

        case SkinActionTypes.CHANGE_SKIN_ERROR:
            return { loading: false, error: action.payload, image: null }

        default:
            return state
    }
}
