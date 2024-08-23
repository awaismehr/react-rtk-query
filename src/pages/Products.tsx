import React from 'react'
import Header from '../compoments/Header'
import Sidebar from '../compoments/Sidebar'

const Products = () => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Header />
      {/* Sidebar */}
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex justify-between">
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
              product Managment
            </h2>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Products
