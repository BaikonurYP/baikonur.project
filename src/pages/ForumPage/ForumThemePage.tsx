import * as React from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/container/container'
import {
    ForumAvaStyled,
    ForumTableStyled,
    ForumWrapperStyled,
    ForumBackStyled,
    ForumMessageStyled,
    ForumTextareaStyled,
    ForumThemeTitle,
} from './ForumPageStyled'

import { Column, DataItem } from './ForumTypes'
import BackIcon from '../../images/icons/back.svg'
import Ava1 from './images/ava1.svg'
import Ava2 from './images/ava2.svg'
import Ava3 from './images/ava3.svg'
import ButtonMain from '../../components/buttons/buttonMain/buttonMain'
import { Layout } from '../../components/layout/layout'

const ForumThemePage: React.FC = () => {
    const history = useHistory()
    const forumTheme = 'обсуждение новых фишек'

    const goBack = () => {
        history.push('/forum')
    }

    const columns: Column[] = React.useMemo(
        () => [
            {
                header: (
                    <ForumBackStyled onClick={goBack}>
                        <img src={BackIcon} alt="avatar" />
                    </ForumBackStyled>
                ),
                key: 'avatar',
            },
            {
                header: <ForumThemeTitle>{forumTheme}</ForumThemeTitle>,
                key: 'message',
            },
        ],
        []
    )
    const data: DataItem[] = React.useMemo(
        () => [
            {
                id: 1,
                avatar: Ava1,
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 2,
                avatar: Ava2,
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 3,
                avatar: Ava3,
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
        []
    )
    return (
        <Layout hasMenu>
            <Container direction="column">
                <ForumWrapperStyled>
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
                                <tr key={item.id}>
                                    <td>
                                        <ForumAvaStyled>
                                            <img
                                                src={item.avatar}
                                                alt="avatar"
                                            />
                                        </ForumAvaStyled>
                                    </td>
                                    <td>{item.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </ForumTableStyled>
                    <ForumMessageStyled>
                        <ForumTextareaStyled />
                        <ButtonMain
                            color="yellow"
                            onClick={() => console.log()}
                        >
                            Отправить сообщение
                        </ButtonMain>
                    </ForumMessageStyled>
                </ForumWrapperStyled>
            </Container>
        </Layout>
    )
}

export default ForumThemePage
