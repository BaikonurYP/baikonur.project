import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { Logo } from './logo'

describe('Logo test', () => {
    it('should render', () => {
        render(<Logo />)
    })
})
