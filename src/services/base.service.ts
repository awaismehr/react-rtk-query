// rtk query imports
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  // we can specify base url of api here
  baseUrl: 'https://jsonplaceholder.typicode.com',

  // we can use preHeaders function to add or remove header in the api request
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.token

    // By default, if we have a token in the store, then we can authenticate user based on that token
    const token = 'jwttoken'

    // if there is token then pass that token to headers
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
      headers.set('Accept', `application/json`)
    }

    return headers
  },
})

// base query is resposible for common configuration of apis
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  // the result object contain the response of the api we can handle the error gracefully by using result variable
  // alternativly we can change the response of the api as well so that all services will have that object
  if (result.error) {
    // show toast message here
  }

  return result
}
