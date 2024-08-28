import * as Yup from 'yup'

export const registerFormSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  phone: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{3}$/,
      'Phone number must be in the format 123-45-678',
    )
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})
