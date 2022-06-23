export type SwaggerUserInfo = {
    id: number
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string
}

export type SwaggerCommentsInfo = {
    comments: SwaggerCommentInfo[]
}

export type SwaggerCommentInfo = {
    id: number
    topic_id: number
    message: string
    user_id: number
    user_name: string
    user_avatar: string
    date: string
    createdAt: string
    updatedAt: string
}