import React from 'react'
import {
	Route, Routes
} from 'react-router-dom'
import Navbar from '../components/Navbar'
import ManScreen from '../pages/ManScreen'
import SearchScreen from '../pages/SearchScreen'
import WomanScreen from '../pages/WomanScreen'

const AppRouter = () => {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route exact path="/mans" element={<ManScreen />} />
				<Route exact path="/womans" element={<WomanScreen />} />
				<Route exact path="/search" element={<SearchScreen />} />
			</Routes>
		</>
	)
}

export default AppRouter
