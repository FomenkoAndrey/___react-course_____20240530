import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Логін повинен містити не менше 3 символів')
    .max(15, 'Логін повинен містити не більше 15 символів')
    .required('Логін є обов’язковим полем'),
  password: Yup.string()
    .min(6, 'Пароль повинен містити не менше 6 символів')
    .max(20, 'Пароль повинен містити не більше 20 символів')
    .required('Пароль є обов’язковим полем'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі повинні співпасти')
    .required('Підтвердження паролю є обов’язковим полем'),
  email: Yup.string().email('Введіть коректний email').required('Email є обов’язковим полем')
})

export const initialValues = { username: '', password: '', confirmPassword: '', email: '' }
