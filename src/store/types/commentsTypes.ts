export interface Comment {
    id?: number
    topic_id?: number
    message?: string
    user_id?: number
    user_name?: string
    user_avatar?: string
    date?: string
    createdAt?: string
    updatedAt?: string
}

export interface CommentData {
    data: Comment
}

export interface CommentState {
    comments: CommentData[]
    loading: boolean
}

export enum CommentActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    SAVE_COMMENT = 'SAVE_COMMENT',
    SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS',
    SAVE_COMMENT_ERROR = 'SAVE_COMMENT_ERROR',
}
export interface FetchCommentAction {
    type: CommentActionTypes.FETCH_COMMENTS
    payload: any
}
export interface FetchCommentSuccessAction {
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS
    payload: any[]
}
export interface FetchCommentErrorAction {
    type: CommentActionTypes.FETCH_COMMENTS_ERROR
    payload: string
}

export interface SaveCommentAction {
    type: CommentActionTypes.SAVE_COMMENT
    payload: any
}
export interface SaveCommentSuccessAction {
    type: CommentActionTypes.SAVE_COMMENT_SUCCESS
    payload: any
}
export interface SaveCommentErrorAction {
    type: CommentActionTypes.SAVE_COMMENT_ERROR
    payload: string
}

export type CommentsAction =
    | FetchCommentAction
    | FetchCommentSuccessAction
    | FetchCommentErrorAction
    | SaveCommentAction
    | SaveCommentSuccessAction
    | SaveCommentErrorAction
