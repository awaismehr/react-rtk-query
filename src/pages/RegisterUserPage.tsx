import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import RegisterForm from '../components/auth/RegisterForm'

const RegisterUserPage = () => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Header />
      {/* Sidebar */}
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex justify-between">
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Register User
            </h2>
          </div>

          <RegisterForm />
        </div>
      </main>
    </div>
  )
}

export default RegisterUserPage
