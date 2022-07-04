import {
    CommentState,
    CommentActionTypes,
    Comment,
} from '../types/commentsTypes'

export const fetchComments = (payload: number) => ({
    type: CommentActionTypes.FETCH_COMMENTS,
    payload,
})

export const fetchCommentsSuccess = (payload: CommentState) => ({
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
    payload,
})
export const fetchCommentsError = (payload: string) => ({
    type: CommentActionTypes.FETCH_COMMENTS_ERROR,
    payload,
})

export const saveComment = (payload: Comment) => ({
    type: CommentActionTypes.SAVE_COMMENT,
    payload,
})

export const saveCommentSuccess = (payload: Comment) => ({
    type: CommentActionTypes.SAVE_COMMENT_SUCCESS,
    payload,
})

export const saveCommentError = () => ({
    type: CommentActionTypes.SAVE_COMMENT_ERROR,
})
