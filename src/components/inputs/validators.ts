import * as yup from 'yup'

/** Стандартная ошибка о необходимости заполнения поля */
const requiredError = 'Поле обязательно для заполнения'

/** Получить слово "символ" с нужным склонением */
const getSymbolText = (num: number) => {
    let symbol_text = 'символ'
    if (
        (num >= 10 && num <= 20)
        || (num % 10 >= 5 && num % 10 <= 9)
        || num % 10 == 0
    ) {
        symbol_text = 'символов'
    } else if (num % 10 >= 2 && num % 10 <= 4) {
        symbol_text = 'символа'
    }
    return symbol_text
}

/** Ошибка о минимальной длине строки */
const minFieldError = (f: { min: number }) =>
    `Минимальная длина - ${f.min} ${getSymbolText(f.min)}`
/** Ошибка о максимальной длине строки */
const maxFieldError = (f: { max: number }) =>
    `Максимальная длина - ${f.max} ${getSymbolText(f.max)}`

/** Цепочка валидации для логина */
const loginValidationChain = yup
    .string()
    .required(requiredError)
    .min(3, minFieldError)
    .matches(
        /^[A-z0-9_-]{3,20}$/,
        'Допускается латиница, цифры, дефис (-) и нижнее подчеркивание(_)'
    )
    .matches(/^.*[A-z]{1}.*$/, 'Должна быть как миним одна буква')

/** Цепочка валидации для паролей */
const passwordValidationChain = yup
    .string()
    .required(requiredError)
    .min(8, minFieldError)
    .max(40, maxFieldError)
    .matches(
        /^.*[A-ZА-ЯЁ]{1}.*$/,
        'Должна быть как минимум одна заглавная буква'
    )
    .matches(/^.*[0-9].*$/i, 'Должна быть как минимум одна цифра')

/** Цепочка валидации для имен */
const nameValidationChain = yup
    .string()
    .nullable()
    .required(requiredError)
    .matches(
        /^[A-ZА-ЯЁ][A-zА-яЁё-]+$/,
        'Допускается только кириллица, латиница и нижнее подчеркивание (_)'
    )

/**  Цепочка для валидации отображаемого имени */
const displayNameValidationChain = yup
    .string()
    .nullable()
    .required(requiredError)

/** Цепочка валидации для почты */
const emailValidationChain = yup
    .string()
    .required(requiredError)
    .email('Адрес электроной почты должен быь введен корректно')

/** Цепочка валидации для телефонов */
const phoneValidationChain = yup
    .string()
    .required('Поле обязательно для заполнения')
    .min(8, 'Минимальная длина - 8 символов')
    .max(15, 'Максимальная длина - 15 символов')
    .matches(/^\+?\d{8,15}$/, 'Допускаются только цифры и знак плюса в начале')

export {
    loginValidationChain,
    passwordValidationChain,
    nameValidationChain,
    displayNameValidationChain,
    emailValidationChain,
    phoneValidationChain
}
