export interface Leader {
    id: number
    name: string
    cost: number
    avatar: string
}

export interface LeadersState {
    leaders: Leader[]
    loading: boolean
    error: null | string
}
export enum LeadersActionTypes {
    FETCH_LEADERS = 'FETCH_LEADERS',
    FETCH_LEADERS_SUCCESS = 'FETCH_LEADERS_SUCCESS',
    FETCH_LEADERS_ERROR = 'FETCH_LEADERS_ERROR',
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
export type LeadersAction =
    | FetchLeadersAction
    | FetchLeadersSuccessAction
    | FetchLeadersErrorAction
