import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { experienceFormSchema } from './ExperienceFormSchema'
import { ExperienceFormValues } from './ExperinceForm.types'

const ExperienceForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<ExperienceFormValues>(experienceFormSchema),
    defaultValues: {
      current_designation: '',
      total_experience: 0,
      previous_experience: [
        {
          company: '',
          designation: '',
        },
      ],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'previous_experience',
  })

  const onSubmit = async (formValues: ExperienceFormValues) => {
    try {
      alert(JSON.stringify(formValues, null, 2))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Current Designation
          </label>
          <Controller
            name="current_designation"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="current_designation"
                className={`bg-gray-50 border ${errors.current_designation ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Developer"
              />
            )}
          />
          {errors.current_designation && (
            <p className="text-red-500 mt-2 text-xs">
              {errors.current_designation.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="total_experience"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Total experience
          </label>
          <Controller
            name="total_experience"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                id="total_experience"
                className={`bg-gray-50 border ${errors.total_experience ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="2"
              />
            )}
          />
          {errors.total_experience && (
            <p className="text-red-500 mt-2 text-xs">
              {errors.total_experience.message}
            </p>
          )}
        </div>
      </div>

      <h5 className="text-xl font-bold dark:text-white mb-10">
        Previous Experience
      </h5>

      {fields?.map((field, index) => (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div key={field?.id}>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <Controller
              name={`previous_experience.${index}.company`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="company"
                  className={`bg-gray-50 border ${errors.previous_experience?.[index]?.company ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
              )}
            />
            {errors.previous_experience?.[index]?.company && (
              <p className="text-red-500 mt-2 text-xs">
                {errors.previous_experience?.[index]?.company?.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Designation
            </label>
            <Controller
              name={`previous_experience.${index}.designation`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="designation"
                  className={`bg-gray-50 border ${errors?.previous_experience?.[index]?.designation ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Senior Developer"
                />
              )}
            />
            {errors?.previous_experience?.[index]?.designation && (
              <p className="text-red-500 mt-2 text-xs">
                {errors?.previous_experience?.[index]?.designation?.message}
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="w-full flex justify-end">
        <button
          onClick={() => append({ designation: '', company: '' })}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10"
        >
          Add Experience
        </button>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  )
}

export default ExperienceForm
