// rtk query imports
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './base.service'
import { User } from '../types/user'
import { UserAddFormValues } from '../components/user/UserAddForm.types'

const prefix = 'users'

// user service is responsible for the all endpoints of the user
export const userApi = createApi({
  // user service will be extended from the baseQueryWithReauth
  baseQuery: baseQueryWithReauth,

  // unique reducer path for the redux store
  reducerPath: 'userApi',

  // tag types for all the tag of the user
  tagTypes: ['Users'],

  // endpoint object will contain all the endpoints
  endpoints: (builder) => ({
    // depending upon the request whether it is mutating the data or fetching the data we can use either mutation function or query function
    listUsers: builder.query<User[], void>({
      // query function contains all the attributes for the request like body , params ,query and method
      query: () => ({
        url: `${prefix}`,
        method: 'GET',
        // body
        // params
      }),

      // provided tags will be used to invalidate the request
      providesTags: ['Users'],
    }),

    deleteUser: builder.mutation<User, number>({
      query: (id) => ({
        url: `${prefix}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),

    createUser: builder.mutation<User, UserAddFormValues>({
      query: (body) => ({
        url: `${prefix}`,
        method: 'POST',
        body,
      }),

      // invalidate tags will call the api again by cheking the tags array
      invalidatesTags: ['Users'],
    }),
  }),
})

export const {
  useListUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
} = userApi
