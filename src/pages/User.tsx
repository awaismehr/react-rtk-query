import { useNavigate } from 'react-router-dom'
import Header from '../compoments/Header'
import Sidebar from '../compoments/Sidebar'
import {
  useDeleteUserMutation,
  useListUsersQuery,
} from '../services/user.service'
import { User } from '../types/user'

const UserPage = () => {
  // list user mutation
  const { data: users } = useListUsersQuery()

  // delete user mutation
  const [deleteUserMutation] = useDeleteUserMutation()
  const navigate = useNavigate()

  const deleteUser = async (user: User) => {
    try {
      // when delete user mutation will be called it will fetch the latest list from server again
      await deleteUserMutation(user.id).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Header />
        {/* Sidebar */}
        <Sidebar />
        <main className="p-4 md:ml-64  pt-20">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
            <div className="flex justify-between">
              <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                User Managment
              </h2>
              <button
                onClick={() => navigate('/add-user')}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
              >
                Add User
              </button>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Website
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={index}
                  >
                    <th className="px-6 py-4">{user?.id}</th>
                    <td className="px-6 py-4">{user?.name}</td>
                    <td className="px-6 py-4">{user?.username}</td>
                    <td className="px-6 py-4">{user?.email}</td>
                    <td className="px-6 py-4">{user?.phone}</td>
                    <td className="px-6 py-4">{user?.website}</td>
                    <td className="px-6 py-4">
                      <div>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline ml-5"
                          onClick={() => deleteUser(user)}
                        >
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  )
}

export default UserPage
