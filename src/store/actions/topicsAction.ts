import { TopicState, TopicsActionTypes, Topic } from '../types/topicTypes'

export const fetchTopics = () => ({ type: TopicsActionTypes.FETCH_TOPICS })
export const fetchTopicsSuccess = (payload: TopicState) => ({
    type: TopicsActionTypes.FETCH_TOPICS_SUCCESS,
    payload,
})
export const fetchTopicsError = (payload: string) => ({
    type: TopicsActionTypes.FETCH_TOPICS_ERROR,
    payload,
})

export const saveTopic = (payload: Topic) => ({
    type: TopicsActionTypes.SAVE_TOPIC,
    payload,
})


export const saveTopicSuccess = (payload: Topic) => ({
    type: TopicsActionTypes.SAVE_TOPIC_SUCCESS,
    payload
})

export const saveTopicError = () => ({
    type: TopicsActionTypes.SAVE_TOPIC_ERROR,
})