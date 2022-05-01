import * as React from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/container/container'
import {
    ForumTitleWrapStyled,
    ForumWrapperStyled,
    ForumTitleStyled,
    ForumTableStyled,
} from './ForumPageStyled'

import ButtonMain from '../../components/buttons/buttonMain/buttonMain'
import { Column, DataList } from './ForumTypes'

const ForumPage: React.FC = () => {
    const history = useHistory()

    const goToTheme = (id: number) => {
        history.push(`/forum/${id}`)
    }

    const columns: Column[] = React.useMemo(
        () => [
            {
                header: 'Тема',
                key: 'theme',
            },
            {
                header: 'Ответы',
                key: 'answers',
            },
            {
                header: 'Дата создания',
                key: 'date',
            },
        ],
        []
    )
    const data: DataList[] = React.useMemo(
        () => [
            {
                id: 1,
                theme: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
                count: 23,
                date: '2022-12-12',
            },
            {
                id: 2,
                theme: 'Quam aliquam odio ullamcorper ornare eleifend ipsum ',
                count: 456,
                date: '2022-12-12',
            },
            {
                id: 3,
                theme: 'Mauris quam tristique et parturient sapien.',
                count: 67,
                date: '2022-12-12',
            },
            {
                id: 4,
                theme: 'Fermentum porttitor amet, vulputate ornare tortor nisi',
                count: 2345,
                date: '2022-12-12',
            },
            {
                id: 5,
                theme: 'Sed at ornare scelerisque in facilisis tincidunt',
                count: 80000,
                date: '2022-12-12',
            },
            {
                id: 6,
                theme: 'Molestie est pharetra eu congue velit felis ipsum velit.',
                count: 345,
                date: '2022-12-12',
            },
            {
                id: 7,
                theme: 'Et adipiscing vitae amet mauris eget vel.',
                count: 234,
                date: '2022-12-12',
            },
            {
                id: 8,
                theme: 'Leo maecenas quis sapien morbi nunc, porta nibh.',
                count: 678,
                date: '2022-12-12',
            },
        ],
        []
    )
    return (
        <Container>
            <ForumWrapperStyled>
                <ForumTitleWrapStyled>
                    <ForumTitleStyled>Список форумов</ForumTitleStyled>
                    <ButtonMain color="yellow" onClick={() => console.log()}>
                        + Новый форум
                    </ButtonMain>
                </ForumTitleWrapStyled>
                <ForumTableStyled>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key}>{column.header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr
                                onClick={() => goToTheme(item.id)}
                                key={item.id}
                            >
                                <td>{item.theme}</td>
                                <td>{item.count?.toLocaleString('ru-Ru')}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </ForumTableStyled>
            </ForumWrapperStyled>
        </Container>
    )
}

export default ForumPage
