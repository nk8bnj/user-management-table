import { Provider } from 'react-redux'

import Header from './components/Header'
import UserTable from './components/UserTable'
import { store } from './store/store'

export default function App() {
	return (
		<Provider store={store}>
			<div className='flex flex-col items-center'>
				<Header />
				<UserTable />
			</div>
		</Provider>
	)
}
