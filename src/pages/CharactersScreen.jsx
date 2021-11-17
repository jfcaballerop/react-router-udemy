import React from 'react'
import { useHistory, useParams } from 'react-router'
import { Characters } from '../models/Characters'

const CharactersScreen = () => {
	const { id } = useParams()
	const { type, name, description } = Characters.find(ch => ch.id === id)
	const path = `/assets/${type}-${id}.png`
	const history = useHistory();

	const handleBack = () => {
		history.goBack(-1)
	}

	return (
		<div className="container row">
			<div className="col-8">
				<img className="img-thumbnail mt-3" src={path} alt={id} style={{ width: "25vw" }} />
			</div>
			<div className="col-4" >
				<h2>Nombre: {name}</h2>
				<p>{description}</p>

				<button onClick={handleBack} className="btn btn-warning">Go back</button>
			</div>
		</div>
	)
}

export default CharactersScreen
