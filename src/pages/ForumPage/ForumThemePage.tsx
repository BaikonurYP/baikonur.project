import * as React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { Formik, Form, Field } from 'formik'
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
    const { comments } = useAppSelector((state) => state.comments)
    const { user } = useAppSelector((state) => state.user)
    const { topics } = useAppSelector((state) => state.topics)
    const theme = useAppSelector((state) => state.theme)

    const goBack = () => {
        history.push('/forum')
    }

    useEffect(() => {
        const curTopic = topics.find(
            (item) => Number(item.id) === Number(id)
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

    return (
        <Layout hasMenu>
            <Container direction="column">
                <ForumWrapperStyled theme={theme.name || 'dark'}>
                    <ForumTableStyled theme={theme.name || 'dark'}>
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
