import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { FormProvider, useForm } from 'react-hook-form'
import FirstCard from '../components/formcontext/FirstCard'
import SecondCard from '../components/formcontext/SecondCard'
import ThirdCard from '../components/formcontext/ThirdCard'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface FormValues {
  field1: ''
  field2: ''
  field3: ''
}

const formSchema = yup.object().shape({
  field1: yup.string().required().label('Field1'),
  field2: yup.string().required().label('Field2'),
  field3: yup.string().required().label('Field3'),
})

const FormContext = () => {
  const methods = useForm({
    resolver: yupResolver<FormValues>(formSchema),
    defaultValues: {
      field1: '',
      field2: '',
      field3: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Header />
        {/* Sidebar */}
        <Sidebar />
        <main className="p-4 md:ml-64 h-auto pt-20">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex justify-between">
              <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Form Context
              </h2>
            </div>

            <FormProvider {...methods}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <FirstCard />
                <SecondCard />
                <ThirdCard />
              </div>
              <button
                onClick={methods.handleSubmit(onSubmit)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </FormProvider>
          </div>
        </main>
      </div>
    </>
  )
}

export default FormContext
