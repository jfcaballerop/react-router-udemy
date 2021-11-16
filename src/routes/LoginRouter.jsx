import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import Login from '../pages/Login'
import AppRouter from './AppRouter'

const LoginRouter = () => {
	return (
		<Router>
			<AppRouter></AppRouter>
			<Routes>
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</Router>

	)
}

export default LoginRouter
