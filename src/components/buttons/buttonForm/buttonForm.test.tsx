import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import ButtonForm from './buttonForm'

describe('Button test', () => {
    it('should render', () => {
        render(<ButtonForm />)
    })

    it('should render childs', () => {
        const child = 'CHILD'
        const button = render(<ButtonForm>{child}</ButtonForm>)
        expect(button.getByText(child)).toBeInTheDocument
    })

    it('should call callback on click', () => {
        const callback = jest.fn()
        const button = render(<ButtonForm onClick={callback}>TEST</ButtonForm>)
        act(() => {
            fireEvent.click(button.getByText('TEST'))
        })
        expect(callback).toHaveBeenCalled()
    })

    it('should render tooltip', () => {
        const button = render(<ButtonForm />)
        expect(button.getByText('Message')).toBeInTheDocument
    })
})
