import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import queryString from 'query-string'
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = "" } = queryString.parse(location.search)
	const [inputValue, setinputValue] = useState(q);
	const [characters, setcharacters] = useState([])
	const handleChange = (e) => {
		const val = e.target.value
		setinputValue(val)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		history.push(`?q=${inputValue}`)
	}

	const getCharacters = () => {
		if (inputValue.trim() !== "") {
			const value = inputValue.toLocaleLowerCase()
			const characters = Characters.filter(ch => ch.name.toLocaleLowerCase().includes(value))
			setcharacters(characters)
		} else {
			setcharacters([])
		}
	}

	useEffect(() => {
		getCharacters();
	}, [q])

	return (
		<div className="container">
			<h1> Search Screen</h1>
			<hr />
			<div className="row">
				<div className="col-6">
					<h2>
						Search
					</h2>
					<form onSubmit={handleSubmit}>
						<label className="form-label w-100"> Character:
							<input type="text" placeholder="name" className="form-control" autoComplete="off" value={inputValue} onChange={handleChange} />
						</label>
						<button type="submit" className="btn btn-info w-100">Search</button>
					</form>
				</div>

				<div className="col-6">
					<h2>Results: {characters.length}</h2>
					{
						characters.length === 0 && (<div className="alert alert-warning text-center">Please search a character</div>)
					}
					{
						characters.map(c => <Card key={c.id} {...c}></Card>)
					}
				</div>

			</div>

		</div>
	)
}

export default SearchScreen
