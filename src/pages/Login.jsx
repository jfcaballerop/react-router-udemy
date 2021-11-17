import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'

const Login = () => {
	const { dispatch } = useContext(AuthContext)
	const history = useHistory()

	const handleLogin = () => {
		// console.log(history)

		dispatch({ type: authTypes.login })
		history.push("/")
	}
	return (
		<div className="container mr-5 text-center">
			<img src="/assets/animate.gif" alt="logo" />
			<h1 className="my-3">Login</h1>
			<button className="btn btn-primary" onClick={handleLogin}>Login</button>
		</div>
	)
}

export default Login
