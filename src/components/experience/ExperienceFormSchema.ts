import * as yup from 'yup'

export const experienceFormSchema = yup.object().shape({
  current_designation: yup.string().required().label('Currenct Designation'),
  total_experience: yup
    .number()
    .required()
    .label('Total Experience')
    .typeError('Total Experience is a required field.'),

  previous_experience: yup.array().of(
    yup.object().shape({
      company: yup.string().required().label('Comapny'),
      designation: yup.string().required().label('Designation'),
    }),
  ),
})
