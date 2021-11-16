import React from 'react'
import { useNavigate } from 'react-router'

const Login = (props) => {
	let navigation = useNavigate()

	const handleLogin = () => {
		console.log(props)
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
