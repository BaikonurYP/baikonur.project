import React from 'react'
import { render } from '@testing-library/react'
import Input from './input'

describe('Input test', () => {
    it('should render', () => {
        render(<Input />)
    })

    it('should render error', () => {
        const input = render(<Input helper="Message" />)
        expect(input.getByText('Message')).toBeInTheDocument
    })
})
