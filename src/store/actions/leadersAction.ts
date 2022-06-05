import {LeadersState, LeadersActionTypes} from '../types/leaderTypes'

export const fetchLeaders = () => ({ type: LeadersActionTypes.FETCH_LEADERS })
export const fetchLeadersSuccess = (payload: LeadersState) => ({
    type: LeadersActionTypes.FETCH_LEADERS_SUCCESS,
    payload
})
export const fetchLeadersError = (payload: string) => ({
    type: LeadersActionTypes.FETCH_LEADERS_ERROR,
    payload,
})

export const saveLeader = () => ({ type: LeadersActionTypes.SAVE_LEADER })
export const saveLeaderSuccess = (payload: string) => ({
    type: LeadersActionTypes.SAVE_LEADER_SUCCESS,
    payload,
})
export const saveLeaderError = (payload: string) => ({
    type: LeadersActionTypes.SAVE_LEADER_ERROR,
    payload,
})