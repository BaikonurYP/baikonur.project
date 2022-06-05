export interface Leader {
    id: number
    name: string
    baikonurScore: number
    avatar: string
}

export interface LeadersState {
    data: Leader
}

export enum LeadersActionTypes {
    FETCH_LEADERS = 'FETCH_LEADERS',
    FETCH_LEADERS_SUCCESS = 'FETCH_LEADERS_SUCCESS',
    FETCH_LEADERS_ERROR = 'FETCH_LEADERS_ERROR',
    SAVE_LEADER = 'SAVE_LEADER',
    SAVE_LEADER_SUCCESS = 'SAVE_LEADER_SUCCESS',
    SAVE_LEADER_ERROR = 'SAVE_LEADER_ERROR',
}
interface FetchLeadersAction {
    type: LeadersActionTypes.FETCH_LEADERS
}
interface FetchLeadersSuccessAction {
    type: LeadersActionTypes.FETCH_LEADERS_SUCCESS
    payload: any[]
}
interface FetchLeadersErrorAction {
    type: LeadersActionTypes.FETCH_LEADERS_ERROR
    payload: string
}

interface SaveLeaderAction {
    type: LeadersActionTypes.SAVE_LEADER
}
interface SaveLeaderSuccessAction {
    type: LeadersActionTypes.SAVE_LEADER_SUCCESS
    payload: any[]
}
interface SaveLeaderErrorAction {
    type: LeadersActionTypes.SAVE_LEADER_ERROR
    payload: string
}

export type LeadersAction =
    | FetchLeadersAction
    | FetchLeadersSuccessAction
    | FetchLeadersErrorAction
    | SaveLeaderAction
    | SaveLeaderSuccessAction
    | SaveLeaderErrorAction