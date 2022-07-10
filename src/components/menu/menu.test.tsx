import React from 'react'
import configureStore from 'redux-mock-store'
import { render, fireEvent, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import Menu from './menu'

describe('Menu test', () => {
    const initialState = {
        user: {
            user: {},
        },
        auth: {
            isAuth: true,
        },
    }
    const mockStore = configureStore()
    it('should render', () => {
        const store = mockStore(initialState)
        render(
            <Provider store={store}>
                <Menu />
            </Provider>
        )
    })
})
