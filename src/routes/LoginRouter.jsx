import React, { useContext } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Login from '../pages/Login'
import AppRouter from './AppRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const LoginRouter = () => {
	const { log } = useContext(AuthContext)

	return (
		<Router>
			<Switch>
				<PublicRouter path="/login" auth={log} component={Login} />
				<PrivateRouter path="/" auth={log} component={AppRouter} />
			</Switch>
		</Router>

	)
}

export default LoginRouter
