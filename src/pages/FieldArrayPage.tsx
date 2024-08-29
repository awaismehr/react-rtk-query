import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ExperienceForm from '../components/experience/ExperienceForm'

const ExperiencePage = () => {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Header />
        {/* Sidebar */}
        <Sidebar />
        <main className="p-4 md:ml-64 h-auto pt-20">
          <div className="relative overflow-x-auto">
            <div className="flex justify-between">
              <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Field Array
              </h2>
            </div>

            <ExperienceForm />
          </div>
        </main>
      </div>
    </>
  )
}

export default ExperiencePage
