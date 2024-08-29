import { Controller, useFormContext } from 'react-hook-form'

const FirstCard = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="relative overflow-x-auto">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Field 3 Card
          </h5>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              field3
            </label>
            <Controller
              name="field3"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="field3"
                  className={`bg-gray-50 border ${errors.field3 ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
              )}
            />
            {errors.field3 && (
              <p className="text-red-500 mt-2 text-xs">
                {errors.field3.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstCard
