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
            <ExperienceForm />
          </div>
        </main>
      </div>
    </>
  )
}

export default ExperiencePage
