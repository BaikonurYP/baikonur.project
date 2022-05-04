/**  Типы полей для валидации */
export enum ValidatorFiledType {
    FIRST_NAME,
    SECOND_NAME,
    LOGIN,
    EMAIL,
    PASSWORD,
    OLDPASSWORD,
    NEWPASSWORD,
    PHONE,
}

/** Параметры пресетов правил регекспов */
type RegexpRulesPresetsSettings = {
    rule: RegExp | RegExp[]
    message: string
}

/**
 * Пресеты правил для полей
 */
const RegexpRulesPresets: { [x in string]: RegexpRulesPresetsSettings } = {
    cyrilic_latin_and_underscore: {
        rule: /^[A-ZА-ЯЁ][A-zА-яЁё-]+$/i,
        message:
            'Допускается только кириллица, латиница и нижнее подчеркивание (_)',
    },
    latin_min_3_ciphers_not_all_hyphen_all_underscore: {
        rule: [/^[A-z0-9_-]{3,20}$/i, /^.*[A-z]{1}.*$/i],
        message:
            'Минимальная длина - три символа. Допускается латиница, цифры (но не все значение поля), дефис (-) и нижнее подчеркивание(_)',
    },
    email: {
        rule: /^[A-z]{1}[A-z-_0-9\.]*[A-z]@[A-z]{1}[A-z-_0-9\.]*\.[a-z]+$/i,
        message: 'Адрес должен быть корректным и без ошибок',
    },
    password: {
        rule: [/^.{8,40}$/i, /^.*[A-Z].*$/i, /^.*[0-9].*$/i],
        message:
            'Длина должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
    phone: {
        rule: /\+?\d{8,15}$/i,
        message: 'Допускается 10-15 цифр, может начинаться с +',
    },
    not_empty: {
        rule: /^.{1,}$/i,
        message: 'Поле не может быть пустым',
    },
}

/** Правила обработки полей */
const FieldRules: { [key in ValidatorFiledType]: RegexpRulesPresetsSettings } =
    {
        [ValidatorFiledType.FIRST_NAME]:
            RegexpRulesPresets.cyrilic_latin_and_underscore,
        [ValidatorFiledType.SECOND_NAME]:
            RegexpRulesPresets.cyrilic_latin_and_underscore,
        [ValidatorFiledType.LOGIN]:
            RegexpRulesPresets.latin_min_3_ciphers_not_all_hyphen_all_underscore,
        [ValidatorFiledType.EMAIL]: RegexpRulesPresets.email,
        [ValidatorFiledType.PASSWORD]: RegexpRulesPresets.password,
        [ValidatorFiledType.OLDPASSWORD]: RegexpRulesPresets.password,
        [ValidatorFiledType.NEWPASSWORD]: RegexpRulesPresets.password,
        [ValidatorFiledType.PHONE]: RegexpRulesPresets.phone,
    }

/** Валидатор для полей */
export function FormValidator(
    field: ValidatorFiledType
): (input: string) => string {
    return (str) => {
        if (!str) return ''
        let preset = FieldRules[field]
        let rules: RegExp[] = Array.isArray(preset.rule)
            ? (preset.rule as RegExp[])
            : [preset.rule as RegExp]

        let check = rules.reduce((prev, rule) => {
            let reg = rule
            rule.lastIndex = 0
            return prev && reg.test(str)
        }, true)

        return check ? '' : preset.message
    }
}

const loginValidator = FormValidator(ValidatorFiledType.LOGIN)
const passwordValidator = FormValidator(ValidatorFiledType.PASSWORD)
const firstNameValidator = FormValidator(ValidatorFiledType.FIRST_NAME)
const secondNameValidator = FormValidator(ValidatorFiledType.SECOND_NAME)
const emailValidator = FormValidator(ValidatorFiledType.EMAIL)
const phoneValidator = FormValidator(ValidatorFiledType.PHONE)

export {
    loginValidator,
    passwordValidator,
    firstNameValidator,
    secondNameValidator,
    emailValidator,
    phoneValidator,
}
