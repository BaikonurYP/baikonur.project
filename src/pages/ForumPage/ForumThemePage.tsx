import * as React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import {useEffect, useState} from 'react'

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
    ForumThemeTitle
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

    useEffect(() => {
        console.log(topics)
        console.log(id)
        const curTopic = topics.find((item: Topic) => Number(item.id) === Number(id))
        console.log(curTopic?.name)
        setTopicName(curTopic?.name)
        dispatch(fetchComments(id))
    }, [])

    const sendMessage = (values: any) => {
        console.log(values)
        const dataToSend = {
            topic_id: id,
            message: values.message,
            user_id: user.id,
            user_name: user.display_name || user.login,
            user_avatar: user.avatar || '',
            date: '23.06.2022'
        }
        dispatch(saveComment(dataToSend))
    }

    const urlToImage = (url: string) => `${BASE_IMG_URL}/${url} `

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
                                    <ForumThemeTitle>{topicName}</ForumThemeTitle>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((item: Comments, i: number) => (
                                <tr key={item?.id}>
                                    <td>
                                        <ForumAvaStyled>
                                            <img
                                                src={
                                                    item?.user_avatar
                                                        ? urlToImage(
                                                            item.user_avatar
                                                        )
                                                        : Ava1
                                                }
                                                alt="avatar"/>
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
                            onSubmit={sendMessage}>
                            <Form>
                                <Field name="message">
                                    {({ field }) => (
                                        <ForumTextareaStyled
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}/>
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
