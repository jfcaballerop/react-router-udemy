import React, { lazy, Suspense } from 'react'
import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom'


const Navbar = lazy(() => import('../components/Navbar'))
const CharactersScreen = lazy(() => import('../pages/CharactersScreen'))
const ManScreen = lazy(() => import('../pages/ManScreen'))
const SearchScreen = lazy(() => import('../pages/SearchScreen'))
const WomanScreen = lazy(() => import('../pages/WomanScreen'))

const AppRouter = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/mans" component={ManScreen} />
				<Route exact path="/womans" component={WomanScreen} />
				<Route exact path="/search" component={SearchScreen} />
				<Route exact path="/character/:id" component={CharactersScreen} />

				<Redirect to="/mans" />

			</Switch>
		</Suspense>
	)
}

export default AppRouter
