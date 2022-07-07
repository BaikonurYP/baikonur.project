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
<<<<<<< HEAD
=======
    ForumInputStyled,
>>>>>>> main
} from './ForumPageStyled'

import ButtonMain from '../../components/buttons/buttonMain/buttonMain'
import { Column } from './ForumTypes'
import { Layout } from '../../components/layout/layout'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchTopics, saveTopic } from '../../store/actions/topicsAction'
import { Topic } from '../../store/types/topicTypes'
import Popup from '../../components/popup/Popup'

const ForumPage: React.FC = () => {
    const history = useHistory()

    const dispatch = useAppDispatch()
    const topics = useAppSelector((state) => state.topics.topics)
    const user = useAppSelector((state) => state.user.user)

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
            date: date.toLocaleString('ru-RU'),
        }
        dispatch(saveTopic(data))
        onClose()
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
<<<<<<< HEAD
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
=======
>>>>>>> main
        ],
        []
    )

    return (
        <Layout hasMenu>
            <Container direction="column">
                <ForumWrapperStyled>
                    <ForumTitleWrapStyled>
                        <ForumTitleStyled>Список форумов</ForumTitleStyled>
                        <ButtonMain color="yellow" onClick={showAddModal}>
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
                            {topics.map((item: Topic, i: number) => (
                                <tr
                                    onClick={() => goToTheme(item?.id)}
                                    key={item?.id}
                                >
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
                                {({ field }) => {
                                    return (
                                        <ForumInputStyled
                                            name={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )
                                }}
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
