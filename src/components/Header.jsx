import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<h1>
			<Link to="/">Home</Link> | {" "}
			<Link to="/about">About</Link>
		</h1>
	)
}
