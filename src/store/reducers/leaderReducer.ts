import {
    LeadersAction,
    LeadersActionTypes,
    LeadersState
} from '../types/leaderTypes'

const initialState: LeadersState = {
    data: [],
}

export const leadersReducer = (
    state = initialState,
    action: LeadersAction
): LeadersState => {
    switch (action.type) {
        case LeadersActionTypes.FETCH_LEADERS:
            return action.payload

        case LeadersActionTypes.FETCH_LEADERS_SUCCESS: {
            return { loading: false, error: null, leaders: [...action.payload] }
        }

        case LeadersActionTypes.FETCH_LEADERS_ERROR:
            return { loading: false, error: action.payload, leaders: [] }

        case LeadersActionTypes.SAVE_LEADER:
            return { ...state, loading: true, error: null }
ч
        case LeadersActionTypes.SAVE_LEADER_SUCCESS: {
            return { ...state, loading: false, error: null }
        }

        case LeadersActionTypes.SAVE_LEADER_ERROR:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
