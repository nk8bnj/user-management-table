import { Filter } from './Filter.interface'
import { User } from './User.interface'

export interface UserState {
	users: User[]
	loading: boolean
	error: string | null
	filters: Filter
}
