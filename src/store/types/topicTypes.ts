export interface Topic {
    id?: number
    name?: string
    count?: number
    date?: string
}

export interface TopicData {
    data: Topic
}

export interface TopicState {
    topics: TopicData[]
    loading: boolean
}

export enum TopicsActionTypes {
    FETCH_TOPICS = 'FETCH_TOPICS',
    FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS',
    FETCH_TOPICS_ERROR = 'FETCH_TOPICS_ERROR',
    SAVE_TOPIC = 'SAVE_TOPIC',
    SAVE_TOPIC_SUCCESS = 'SAVE_TOPIC_SUCCESS',
    SAVE_TOPIC_ERROR = 'SAVE_TOPIC_ERROR',
}
export interface FetchTopicsAction {
    type: TopicsActionTypes.FETCH_TOPICS
    payload: any
}
export interface FetchTopicsSuccessAction {
    type: TopicsActionTypes.FETCH_TOPICS_SUCCESS
    payload: any[]
}
export interface FetchTopicsErrorAction {
    type: TopicsActionTypes.FETCH_TOPICS_ERROR
    payload: string
}

export interface SaveTopicAction {
    type: TopicsActionTypes.SAVE_TOPIC
    payload: any
}
export interface SaveTopicSuccessAction {
    type: TopicsActionTypes.SAVE_TOPIC_SUCCESS
    payload: any
}
export interface SaveTopicErrorAction {
    type: TopicsActionTypes.SAVE_TOPIC_ERROR
    payload: string
}

export type TopicsAction =
    | FetchTopicsAction
    | FetchTopicsSuccessAction
    | FetchTopicsErrorAction
    | SaveTopicAction
    | SaveTopicSuccessAction
    | SaveTopicErrorAction
