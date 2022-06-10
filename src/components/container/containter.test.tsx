import React from 'react'
import { render } from '@testing-library/react'
import Container from './container'

describe('Componet test', () => {
    it('should render', () => {
        render(<Container />)
    })

    it('should render childs', () => {
        const child = 'CHILD'
        const container = render(<Container>{child}</Container>)
        expect(container.getByText(child)).toBeInTheDocument
    })
})
