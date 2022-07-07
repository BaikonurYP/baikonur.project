import * as React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { Formik, Form, Field } from 'formik'
import Container from '../../components/container/container'

import { Topic } from '../../store/types/topicTypes'
import {
    ForumAvaStyled,
    ForumTableStyled,
    ForumWrapperStyled,
    ForumBackStyled,
    ForumMessageStyled,
    ForumTextareaStyled,
    ForumThemeTitle,
} from './ForumPageStyled'

import { Column } from './ForumTypes'
import BackIcon from '../../images/icons/back.svg'
import Ava1 from './images/ava1.svg'
import ButtonMain from '../../components/buttons/buttonMain/buttonMain'
import { Layout } from '../../components/layout/layout'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { Comments } from '../../server/tables/comments'
import { fetchComments, saveComment } from '../../store/actions/commentsAction'
import { BASE_IMG_URL } from '../../utils/constants'

const ForumThemePage: React.FC = () => {
    const history = useHistory()
    const { id } = useParams()

    const [topicName, setTopicName] = useState('')

    const dispatch = useAppDispatch()
    const comments = useAppSelector((state) => state.comments.comments)
    const user = useAppSelector((state) => state.user.user)
    const topics = useAppSelector((state) => state.topics.topics)

    const goBack = () => {
        history.push('/forum')
    }

<<<<<<< HEAD
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
=======
    useEffect(() => {
        const curTopic = topics.find(
            (item: Topic) => Number(item.id) === Number(id)
        )
        setTopicName(curTopic?.name)
        dispatch(fetchComments(id))
    }, [])

    const sendMessage = (values: any) => {
        const date = new Date()
        const dataToSend = {
            topic_id: id,
            message: values.message,
            user_id: user.id,
            user_name: user.display_name || user.login,
            user_avatar: user.avatar || '',
            date: date.toLocaleString('ru-RU'),
        }
        dispatch(saveComment(dataToSend))
    }

    const urlToImage = (url: string) => (url ? `${BASE_IMG_URL}/${url}` : Ava1)

>>>>>>> main
    return (
        <Layout hasMenu>
            <Container direction="column">
                <ForumWrapperStyled>
                    <ForumTableStyled>
                        <thead>
                            <tr>
                                <th>
                                    <ForumBackStyled onClick={goBack}>
                                        <img src={BackIcon} alt="avatar" />
                                    </ForumBackStyled>
                                </th>
                                <th>
                                    <ForumThemeTitle>
                                        {topicName}
                                    </ForumThemeTitle>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((item: Comments, i: number) => (
                                <tr key={item?.id}>
                                    <td>
                                        <ForumAvaStyled>
                                            <img
                                                src={urlToImage(
                                                    item?.user_avatar
                                                )}
                                                alt="avatar"
                                            />
                                        </ForumAvaStyled>
                                    </td>
                                    <td>{item?.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </ForumTableStyled>
                    <ForumMessageStyled>
                        <Formik
                            initialValues={{ message: '' }}
                            onSubmit={sendMessage}
                        >
                            <Form>
                                <Field name="message">
                                    {({ field }) => (
                                        <ForumTextareaStyled
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                </Field>
                                <ButtonMain type="submit" color="yellow">
                                    Отправить сообщение
                                </ButtonMain>
                            </Form>
                        </Formik>
                    </ForumMessageStyled>
                </ForumWrapperStyled>
            </Container>
        </Layout>
    )
}

export default ForumThemePage
