import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Tooltip from './tooltip'

describe('Tooltip test', () => {
    it('should render', () => {
        let tooltip = render(<Tooltip visible={true}>MESSAGE</Tooltip>)
        expect(tooltip.getByText('MESSAGE')).toBeInTheDocument
    })

    it('should not to be rendered', () => {
        let tooltip = render(<Tooltip visible={false}>MESSAGE</Tooltip>)
        expect(tooltip.getByText('MESSAGE')).not.toBeInTheDocument
    })
})
