
import {CommentState, CommentActionTypes, CommentsAction} from "../types/commentsTypes";

export const initialState: CommentState = {
    comments: [],
    loading: false,
}

export const commentsReducer = (
    state = initialState,
    action: CommentsAction
): CommentState => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENTS:
            return { ...state, loading: true }

        case CommentActionTypes.FETCH_COMMENTS_SUCCESS: {
            return { ...state, comments: [...action.payload], loading: false }
        }

        case CommentActionTypes.FETCH_COMMENTS_ERROR:
            return { loading: false, comments: [] }

        case CommentActionTypes.SAVE_COMMENT:
            return { ...state, loading: true }

        case CommentActionTypes.SAVE_COMMENT_SUCCESS: {
            return { ...state, comments: [...state.comments, action.payload], loading: false }
        }

        case CommentActionTypes.SAVE_COMMENT_ERROR:
            return { ...state, loading: false }

        default:
            return state
    }
}
