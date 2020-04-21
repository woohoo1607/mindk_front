export const requiredField = value => value ? undefined : "Это поле обязательное для заполнения";

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Некоректный email' : undefined;

export const number = value => value && isNaN(Number(value)) ? 'Номер телефона должен содержать только цифры' : undefined;

const maxLength = max => value =>
    value && value.length > max ? `Максимальное число символов = ${max}` : undefined;

export const maxLength10 = maxLength(10);
