import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../hooks/hooks'
import { RootState } from '../store/store'
import { fetchUsers } from '../store/userSlice'
import { getFilteredUsers } from '../utils/getFilteredUsers'

import ErrorMessage from './ErrorMessage'

export default function UserTable() {
	const dispatch = useAppDispatch()

	const { users, loading, filters, error } = useSelector(
		(state: RootState) => state.users
	)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	const filteredUsers = users.filter(user => getFilteredUsers(user, filters))

	const displayError =
		error || (filteredUsers.length === 0 && !loading ? 'User not found' : null)

	return (
		<div className='w-8/12'>
			{loading ? (
				<p className='text-center text-gray-300 text-xl'>Loading...</p>
			) : displayError ? (
				<ErrorMessage error={displayError} />
			) : (
				<table className='min-w-full mt-6 mb-6 text-lg font-sans shadow-lg'>
					<thead className=''>
						<tr className='bg-emerald-600 text-white'>
							<th className='py-3 px-4 text-left rounded-tl-md'>Name</th>
							<th className='py-3 px-4 text-left'>Username</th>
							<th className='py-3 px-4 text-left'>Email</th>
							<th className='py-3 px-4 text-left rounded-tr-md'>Phone</th>
						</tr>
					</thead>
					<tbody className='[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(even)]:text-emerald-600'>
						{filteredUsers.map(user => (
							<tr
								key={user.id}
								className='last:border-b-4 last:border-emerald-600'
							>
								<td className='py-3 px-4 border-b-2 border-gray'>
									{user.name}
								</td>
								<td className='py-3 px-4 border-b-2 border-gray'>
									{user.username}
								</td>
								<td className='py-3 px-4 border-b-2 border-gray'>
									{user.email}
								</td>
								<td className='py-3 px-4 border-b-2 border-gray'>
									{user.phone}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}
