import * as React from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../components/container/container'
import { ForumAvaStyled, ForumWrapperStyled } from './ForumPageStyled'

import ButtonMain from '../../components/buttons/ButtonMain/ButtonMain'
import Table, { Column, Data, RenderValue } from './Table'
import BackIcon from '../../images/icons/back.svg'

const ForumThemePage: React.FC = () => {
    const history = useHistory()
    const forumTheme = 'обсуждение новых фишек'

    const goToTheme = (id: number) => {
        history.push(`/forum/${id}`)
    }

    const columns: Column[] = React.useMemo(
        () => [
            {
                header: <img src={BackIcon} alt="back" />,
                key: 'avatar',
                render: (value: string) => (
                    <ForumAvaStyled>
                        <img src={value} alt="avatar"/>
                    </ForumAvaStyled>
                ),
            },
            {
                header: forumTheme,
                key: 'message',
            },
        ],
        []
    )
    const data: Data[] = React.useMemo(
        () => [
            {
                id: 1,
                avatar: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 2,
                avatar: 'Quam aliquam odio ullamcorper ornare eleifend ipsum ',
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
                id: 3,
                avatar: 'Mauris quam tristique et parturient sapien.',
                message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
        []
    )
    return (
        <Container>
            <ForumWrapperStyled>
                <Table columns={columns} data={data} />
            </ForumWrapperStyled>
        </Container>
    )
}

export default ForumThemePage
