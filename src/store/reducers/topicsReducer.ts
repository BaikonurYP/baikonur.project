import {
    TopicState,
    TopicsActionTypes,
    TopicsAction,
} from '../types/topicTypes'

export const initialState: TopicState = {
    topics: [],
    loading: false,
}

export const topicsReducer = (
    state = initialState,
    action: TopicsAction
): TopicState => {
    switch (action.type) {
        case TopicsActionTypes.FETCH_TOPICS:
            return { ...state, loading: true }

        case TopicsActionTypes.FETCH_TOPICS_SUCCESS: {
            return { ...state, topics: [...action.payload], loading: false }
        }

        case TopicsActionTypes.FETCH_TOPICS_ERROR:
            return { loading: false, topics: [] }

        case TopicsActionTypes.SAVE_TOPIC:
            return { ...state, loading: true }

        case TopicsActionTypes.SAVE_TOPIC_SUCCESS: {
            return {
                ...state,
                topics: [...state.topics, action.payload],
                loading: false,
            }
        }

        case TopicsActionTypes.SAVE_TOPIC_ERROR:
            return { ...state, loading: false }

        default:
            return state
    }
}
