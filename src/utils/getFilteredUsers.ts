import { Filter } from '@/types/Filter.interface'
import { User } from '@/types/User.interface'

export const getFilteredUsers = (user: User, filters: Filter) => {
	return (
		user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
		user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
		user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
		user.phone.toLowerCase().includes(filters.phone.toLowerCase())
	)
}
