export interface Leader {
    id?: number
    login: string
    name?: string
    baikonurScore: number
    avatar?: string
}

export interface LeaderData {
    data: Leader
}

export interface LeadersState {
    leaders: LeaderData[]
    loading: boolean
}

export enum LeadersActionTypes {
    FETCH_LEADERS = 'FETCH_LEADERS',
    FETCH_LEADERS_SUCCESS = 'FETCH_LEADERS_SUCCESS',
    FETCH_LEADERS_ERROR = 'FETCH_LEADERS_ERROR',
    SAVE_LEADER = 'SAVE_LEADER',
    SAVE_LEADER_SUCCESS = 'SAVE_LEADER_SUCCESS',
    SAVE_LEADER_ERROR = 'SAVE_LEADER_ERROR',
}
export interface FetchLeadersAction {
    type: LeadersActionTypes.FETCH_LEADERS
    payload: any
}
export interface FetchLeadersSuccessAction {
    type: LeadersActionTypes.FETCH_LEADERS_SUCCESS
    payload: any[]
}
export interface FetchLeadersErrorAction {
    type: LeadersActionTypes.FETCH_LEADERS_ERROR
    payload: string
}

export interface SaveLeaderAction {
    type: LeadersActionTypes.SAVE_LEADER
    payload: any
}
export interface SaveLeaderSuccessAction {
    type: LeadersActionTypes.SAVE_LEADER_SUCCESS
    payload: any
}
export interface SaveLeaderErrorAction {
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
