import * as React from 'react'

import { ForumTableStyled } from './ForumPageStyled'

export interface Column {
    header: React.ReactNode
    key: string
}

export interface DataList {
    id: number
    theme: string
    count: number
    date: string
}

export interface DataItem {
    id: number
    avatar: string
    message: string
}
export interface TableProps {
    columns: Column[]
    data: DataItem[] | DataList[]
    rowClick?: (id: number) => void
}
