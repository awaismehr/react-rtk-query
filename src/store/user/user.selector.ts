import { createDraftSafeSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/store'

const selectDomain = (state: RootState) => state.user

export const selectAccessToken = createDraftSafeSelector(selectDomain, user => user.accessToken)
export const selectUser = createDraftSafeSelector(selectDomain, user => user.user)
export const selectSelectedDepartment = createDraftSafeSelector(selectDomain, shared => shared.selectedDepartment)
export const selectTokenExpired = createDraftSafeSelector(selectDomain, user => user.tokenExpired)
