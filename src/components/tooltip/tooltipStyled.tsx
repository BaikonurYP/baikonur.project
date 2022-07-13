import styled from 'styled-components'
import { colors, getColor } from '../../styles/GlobalStyle/colors'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

export type TooltipState = 'default' | 'danger'

function getTooltipColor(state: TooltipState) {
    const tooltip_colors: Record<TooltipState, keyof typeof colors> = {
        default: 'white',
        danger: 'red-light'
    }
    return tooltip_colors[state]
}

function getTextAlign(pos: TooltipPosition) {
    const positions: Record<TooltipPosition, string> = {
        top: 'center',
        bottom: 'center',
        left: 'right',
        right: 'left'
    }
    return positions[pos]
}

/**
 * Сгенерировать селекторы для тултипа в зависимости от позиции
 * @param arr массив значений (последовательность top, right, bottom, left)
 * @param units единицы измерений значений
 * @param prefixParrern паттерн именования селектора (позиция подстовляется через '{pos}')
 * @returns
 */
function getSelectorsForArray(
    arr: number[] | string[],
    units: 'px' | '%' | '',
    prefixParrern?: string
) {
    const getPrefix = (pos: string) =>
        prefixParrern ? prefixParrern.replaceAll('{pos}', pos) : pos
    const positions = ['top', 'right', 'bottom', 'left']
    return arr
        .map((str, ind) => {
            const val = str ? `${str}${units}` : 'unset'
            return `${getPrefix(positions[ind])}: ${val}`
        })
        .join(';')
}

/** Получить стили основного блока тултипа в зависимости от параметра положения */
function getMinePosition(pos: TooltipPosition) {
    const positions: Record<TooltipPosition, number[]> = {
        top: [null, null, 100, 50],
        bottom: [100, null, null, 50],
        left: [50, 105, null, null],
        right: [50, null, null, 105]
    }

    const margins: Record<TooltipPosition, number[]> = {
        top: [null, null, -10, -100],
        bottom: [10, null, null, -100],
        left: [null, null, null, null],
        right: [null, null, null, null]
    }

    return (
        `${getSelectorsForArray(positions[pos], '%')
        };${
            getSelectorsForArray(margins[pos], 'px', 'margin-{pos}')}`
    )
}

/** Получить стили стрелки тултипа в зависимости от параметра положения */
function getArrowPosition(pos: TooltipPosition) {
    const positions: Record<TooltipPosition, number[]> = {
        top: [100, null, null, 50],
        bottom: [null, null, 100, 50],
        left: [50, null, null, 100],
        right: [50, 100, null, null]
    }

    const margins: Record<TooltipPosition, number[]> = {
        top: [null, null, null, -5],
        bottom: [null, null, null, -5],
        left: [-5, null, null, null],
        right: [-5, null, null, null]
    }

    const color: keyof typeof colors = 'purple'
    const transparent = 'transparent'

    const borders: Record<TooltipPosition, string[]> = {
        top: [getColor(color), transparent, transparent, transparent],
        bottom: [transparent, transparent, getColor(color), transparent],
        left: [transparent, transparent, transparent, getColor(color)],
        right: [transparent, getColor(color), transparent, transparent]
    }

    return (
        `${getSelectorsForArray(positions[pos], '%')
        };${
            getSelectorsForArray(margins[pos], 'px', 'margin-{pos}')
        };${
            getSelectorsForArray(borders[pos], '', 'border-{pos}-color')}`
    )
}

export const TooltipStyled = styled.span<{
    visibile: boolean
    position: TooltipPosition
    state?: TooltipState
}>`
    width: 200px;
    background-color: ${getColor('purple')};
    color: ${getColor('white')};
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding: 5px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    visibility: ${(props) => (props.visibile ? 'visible' : 'hidden')};
    color: ${(props) => getColor(getTooltipColor(props.state ?? 'default'))};
    text-align: ${(props) => getTextAlign(props.position ?? 'right')};
    ${(props) => getMinePosition(props.position ?? 'right')};

    &::after {
        content: ' ';
        position: absolute;
        border-width: 5px;
        border-style: solid;
        ${(props) => getArrowPosition(props.position ?? 'right')};
    }

    ${(props) => {
        switch (props.position ?? 'right') {
            case 'left':
            case 'right':
            default:
                return `
                    transform: translateY(-50%);
                    `
        }
    }}
`
