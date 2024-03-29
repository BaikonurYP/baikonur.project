import * as React from 'react'
import { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'

import Container from '../../components/container/container'
import {
    ForumTitleWrapStyled,
    ForumWrapperStyled,
    ForumTitleStyled,
    ForumTableStyled,
    ForumInputStyled
} from './ForumPageStyled'

import ButtonMain from '../../components/buttons/buttonMain/buttonMain'
import { Column } from './ForumTypes'
import { Layout } from '../../components/layout/layout'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchTopics, saveTopic } from '../../store/actions/topicsAction'
import { Topic } from '../../store/types/topicTypes'
import Popup from '../../components/popup/Popup'
import Switcher from '../../components/switcher/switcher'
import { saveTheme } from '../../store/actions/themeAction'

const ForumPage: React.FC = () => {
    const history = useHistory()

    const dispatch = useAppDispatch()
    const { topics } = useAppSelector((state) => state.topics)
    const { user } = useAppSelector((state) => state.user)
    const theme = useAppSelector((state) => state.theme)

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        dispatch(fetchTopics())
    }, [])

    const goToTheme = (id: number) => {
        history.push(`/forum/${id}`)
    }

    const showAddModal = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    const addTheme = (values: { title: string }) => {
        const date = new Date()
        const data = {
            name: values.title,
            count: 0,
            date: date.toLocaleString('ru-RU')
        }
        dispatch(saveTopic(data))
        onClose()
    }
    const columns: Column[] = React.useMemo(
        () => [
            {
                header: 'Тема',
                key: 'theme'
            },
            {
                header: 'Ответы',
                key: 'answers'
            },
            {
                header: 'Дата создания',
                key: 'date'
            }
        ],
        []
    )

    const onChangeTheme = () => {
        dispatch(
            saveTheme({
                id: user.id,
                name: theme?.name === 'dark' ? 'light' : 'dark'
            })
        )
    }

    return (
        <Layout hasMenu>
            <Container direction="column">
                <ForumWrapperStyled theme={theme?.name || 'dark'}>
                    <ForumTitleWrapStyled>
                        <ForumTitleStyled>Список форумов</ForumTitleStyled>
                        <Switcher
                            onChange={onChangeTheme}
                            checked={theme.name === 'light'}/>
                        <ButtonMain color="yellow" onClick={showAddModal}>
                            + Новый форум
                        </ButtonMain>
                    </ForumTitleWrapStyled>
                    <ForumTableStyled theme={theme.name || 'dark'}>
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th key={column.key}>{column.header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {topics.map((item: Topic, i: number) => (
                                <tr
                                    onClick={() => goToTheme(item?.id)}
                                    key={item?.id}>
                                    <td>{item?.name}</td>
                                    <td>
                                        {item?.count.toLocaleString('ru-Ru')}
                                    </td>
                                    <td>{item?.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </ForumTableStyled>
                </ForumWrapperStyled>
                <Popup title="Новая тема" isVisible={visible}>
                    <Formik initialValues={{ title: '' }} onSubmit={addTheme}>
                        <Form>
                            <Field name="title">
                                {({ field }) => (
                                    <ForumInputStyled
                                        name={field.name}
                                        value={field.value}
                                        onChange={field.onChange}/>
                                )}
                            </Field>
                            <ButtonMain type="submit" color="yellow">
                                Создать тему
                            </ButtonMain>
                        </Form>
                    </Formik>
                </Popup>
            </Container>
        </Layout>
    )
}

export default ForumPage
