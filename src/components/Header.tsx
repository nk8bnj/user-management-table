import { useSelector } from 'react-redux'

import { useAppDispatch } from '../hooks/hooks'
import { RootState } from '../store/store'
import { setFilter } from '../store/userSlice'

export default function Header() {
	const dispatch = useAppDispatch()

	const filters = useSelector((state: RootState) => state.users.filters)

	const handleFilterChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		filterType: string
	) => {
		dispatch(setFilter({ filterType, filterValue: e.target.value }))
	}

	return (
		<div>
			<input
				type='text'
				placeholder='Filter by Name'
				value={filters.name}
				onChange={e => handleFilterChange(e, 'name')}
				className='border border-gray-300 rounded px-3 py-2 mr-4 my-8  text-lg'
			/>
			<input
				type='text'
				placeholder='Filter by Username'
				value={filters.username}
				onChange={e => handleFilterChange(e, 'username')}
				className='border border-gray-300 rounded px-3 py-2 mr-4 my-8  text-lg'
			/>
			<input
				type='text'
				placeholder='Filter by Email'
				value={filters.email}
				onChange={e => handleFilterChange(e, 'email')}
				className='border border-gray-300 rounded px-3 py-2 mr-4 my-8  text-lg'
			/>
			<input
				type='text'
				placeholder='Filter by Phone'
				value={filters.phone}
				onChange={e => handleFilterChange(e, 'phone')}
				className='border border-gray-300 rounded px-3 py-2 mr-4 my-8  text-lg'
			/>
		</div>
	)
}
