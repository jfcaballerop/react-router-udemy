import { useEffect, useReducer } from 'react';

import LoginRouter from './routes/LoginRouter'
import { AuthContext } from './context/AuthContext'
import { AuthReducer } from './reducers/AuthReducers'

const init = () => {
	return JSON.parse(localStorage.getItem('log')) || { log: false }
}

function App() {
	const [log, dispatch] = useReducer(AuthReducer, {}, init)

	useEffect(() => {
		localStorage.setItem('log', JSON.stringify(log))
	}, [log])

	return (
		<AuthContext.Provider value={
			{ log, dispatch }
		}>
			<LoginRouter></LoginRouter>
		</AuthContext.Provider>

	);
}

export default App;
