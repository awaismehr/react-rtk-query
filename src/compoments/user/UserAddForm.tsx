import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userAddFormSchema } from './UserAddForm.schema'
import { useCreateUserMutation } from '../../services/user.service'
import { UserAddFormValues } from './UserAddForm.types'
import { useNavigate } from 'react-router-dom'

const UserAddForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAddFormValues>({
    resolver: yupResolver(userAddFormSchema),
    defaultValues: {},
  })

  const [createUserMutation] = useCreateUserMutation()
  const navigate = useNavigate()

  const addUser = async (formValues: UserAddFormValues) => {
    try {
      await createUserMutation(formValues).unwrap()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(addUser)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  {...field}
                />

                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors?.name?.message}
                </p>
              </>
            )}
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>

          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  {...field}
                />

                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors?.username?.message}
                </p>
              </>
            )}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  {...field}
                />

                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors?.email?.message}
                </p>
              </>
            )}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  required=""
                  {...field}
                />

                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors?.phone?.message}
                </p>
              </>
            )}
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Website URL
          </label>

          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <>
                <input
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="google.com"
                  required=""
                  {...field}
                />

                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors?.website?.message}
                </p>
              </>
            )}
          />
        </div>
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

export default UserAddForm
