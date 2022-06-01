import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { Layout } from './layout'

describe('Layout test', () => {
    it('should render', () => {
        render(<Layout />)
    })
})
