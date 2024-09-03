import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getUsers } from '../api/api'
import { UserState } from '../types/UserState.interface'

const initialState: UserState = {
	users: [],
	loading: false,
	error: null,
	filters: {
		name: '',
		username: '',
		email: '',
		phone: ''
	}
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	return getUsers()
})

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setFilter: (state: UserState, action: PayloadAction<{ filterType: string; filterValue: string }>) => {
			const { filterType, filterValue } = action.payload
			state.filters[filterType as keyof UserState['filters']] = filterValue
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false
				state.users = action.payload
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch users'
			})
	}
})

export const { setFilter } = userSlice.actions
export default userSlice.reducer
