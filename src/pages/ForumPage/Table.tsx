import * as React from 'react'

import { ForumTableStyled } from './ForumPageStyled'

export interface Column {
    header: React.ReactNode
    key: string,
    render?: (value: RenderValue) => void
}

export type Data = Record<string, string | number | React.ReactNode>
export type RenderValue = string | number | React.ReactNode;
export interface TableProps {
    columns: Column[]
    data: Data[]
    rowClick?: (id: number) => void
}

const Table = (props: TableProps) => {
    const { columns, data, rowClick } = props

    return (
        <ForumTableStyled>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => (
                    <tr onClick={() => rowClick(item.id)}>
                        <td>{item.theme}</td>
                        <td>{item.count?.toLocaleString('ru-Ru')}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </ForumTableStyled>
    )
}

export default Table
