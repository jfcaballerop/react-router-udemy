import React from 'react'
import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import Navbar from '../components/Navbar'
import CharactersScreen from '../pages/CharactersScreen'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomanScreen from '../pages/WomanScreen'

const AppRouter = () => {
	return (
		<>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/mans" component={ManScreen} />
				<Route exact path="/womans" component={WomanScreen} />
				<Route exact path="/search" component={SearchScreen} />
				<Route exact path="/character/:id" component={CharactersScreen} />

				{/* <Redirect to="/mans" /> */}

			</Switch>
		</>
	)
}

export default AppRouter
