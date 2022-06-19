import {
    LeadersAction,
    LeadersActionTypes,
    LeadersState
} from '../types/leaderTypes'

const initialState: LeadersState = {
    leaders: [],
    loading: false
}

export const leadersReducer = (
    state = initialState,
    action: LeadersAction
): LeadersState => {
    switch (action.type) {
        case LeadersActionTypes.FETCH_LEADERS:
            return { ...state, loading: true }

        case LeadersActionTypes.FETCH_LEADERS_SUCCESS: {
            return { ...state, leaders: [...action.payload], loading: false }
        }

        case LeadersActionTypes.FETCH_LEADERS_ERROR:
            return { loading: false, leaders: [] }

        case LeadersActionTypes.SAVE_LEADER:
            return { ...state, loading: true }

        case LeadersActionTypes.SAVE_LEADER_SUCCESS: {
            return { ...state, loading: false }
        }

        case LeadersActionTypes.SAVE_LEADER_ERROR:
            return { ...state, loading: false }

        default:
            return state
    }
}
