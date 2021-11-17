import React from 'react'

const Login = ({ history }) => {

	const handleLogin = () => {
		// console.log(history)
		history.push("/mans")
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
