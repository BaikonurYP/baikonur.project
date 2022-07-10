/**
 * Список всех цветов
 * (Для безопасного переиспользования в JS и стилях)
 */
export const colors = {
    yellow: '#ffcc00',
    'yellow-dark': '#d1a700',
    purple: '#4a3c55',
    'purple-dark': '#2b2331',
    'purple-light': '#8E7D9C',
    'purple-grey': '#63596D',
    white: '#ffffff',
    'white-30': 'rgba(255, 255, 255, 0.3)',
    'black-20': 'rgba(0, 0, 0, 0.2)',
    grey: '#CBCBCB',
    'light-grey': '#EEEEEE',
    'blue-light': '#1884b4',
    'red-light': '#e76969',
    clear: '#ffffff00'
}

/**
 * Вызов переменной цвета в стилях
 * (позволяет случайно не заюзать цвет, которого у нас нет)
 */
export function getColor(color: keyof typeof colors): string {
    return `var(--${color})`
}
