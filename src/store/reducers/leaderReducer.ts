import {
    LeadersAction,
    LeadersActionTypes,
    LeadersState
} from '../types/leaderTypes'

const initialState: LeadersState = {
    leaders: [],
    loading: false,
    error: null
}

export const leadersReducer = (
    state = initialState,
    action: LeadersAction
): LeadersState => {
    switch (action.type) {
        case LeadersActionTypes.FETCH_LEADERS:
            return { loading: true, error: null, leaders: [] }

        case LeadersActionTypes.FETCH_LEADERS_SUCCESS: {
            return { loading: false, error: null, leaders: [...action.payload] }
        }

        case LeadersActionTypes.FETCH_LEADERS_ERROR:
            return { loading: false, error: action.payload, leaders: [] }

        default:
            return state
    }
}
