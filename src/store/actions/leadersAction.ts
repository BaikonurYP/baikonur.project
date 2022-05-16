
import {Leader, LeadersActionTypes} from '../types/leaderTypes'


export const fetchLeaders = () => ({type: LeadersActionTypes.FETCH_LEADERS})
export const fetchLeadersSuccess = (payload: Leader[]) => ({type: LeadersActionTypes.FETCH_LEADERS_SUCCESS, payload})
