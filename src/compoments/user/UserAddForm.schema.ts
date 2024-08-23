import * as yup from 'yup'

export const userAddFormSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  username: yup.string().required().label('Username'),
  email: yup.string().email().required().label('Email'),
  phone: yup.string().required().label('Phone'),
  website: yup.string().required().label('Website'),
})
