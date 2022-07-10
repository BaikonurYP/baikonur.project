import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Tooltip from './tooltip'

describe('Tooltip test', () => {
    it('should render', () => {
        const tooltip = render(<Tooltip visible>MESSAGE</Tooltip>)
        expect(tooltip.getByText('MESSAGE')).toBeInTheDocument
    })

    it('should not to be rendered', () => {
        const tooltip = render(<Tooltip visible={false}>MESSAGE</Tooltip>)
        expect(tooltip.getByText('MESSAGE')).not.toBeInTheDocument
    })
})
