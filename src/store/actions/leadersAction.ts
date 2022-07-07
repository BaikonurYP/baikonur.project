import { LeadersState, LeadersActionTypes, Leader } from '../types/leaderTypes'

export const fetchLeaders = () => ({ type: LeadersActionTypes.FETCH_LEADERS })
export const fetchLeadersSuccess = (payload: LeadersState) => ({
    type: LeadersActionTypes.FETCH_LEADERS_SUCCESS,
    payload,
})
export const fetchLeadersError = (payload: string) => ({
    type: LeadersActionTypes.FETCH_LEADERS_ERROR,
    payload,
})

export const saveLeader = (payload: Leader) => ({
    type: LeadersActionTypes.SAVE_LEADER,
    payload,
})

export const saveLeaderSuccess = () => ({
    type: LeadersActionTypes.SAVE_LEADER_SUCCESS,
})
export const saveLeaderError = () => ({
    type: LeadersActionTypes.SAVE_LEADER_ERROR,
})
