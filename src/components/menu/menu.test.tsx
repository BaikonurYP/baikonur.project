import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Menu from './menu'

describe('Menu test', () => {
    it('should render', () => {
        render(<Menu />)
    })
})
