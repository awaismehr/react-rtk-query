// redux imports
import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '../../services/user.service'
import { User } from '../../types/user'

interface IInitialState {
  users: null | User[]
}

const initialState: IInitialState = {
  users: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      // wheever listuser query is fullfilled it will update the state of store as well
      userApi.endpoints.listUsers.matchFulfilled,
      (state, { payload }) => {
        state.users = payload
      },
    )
  },
})

export default userSlice.reducer
