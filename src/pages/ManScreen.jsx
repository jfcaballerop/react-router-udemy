import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const ManScreen = () => {
	const mans = Characters.filter(man => man.type === "h")
	return (
		<div className="container mt-3">
			<h1>Mans Screen</h1>
			<div className="card-container">
				<div className="row">
					{mans.map((man) => {
						return <Card key={man.id} {...man}></Card>;
					})}
				</div>
			</div>
		</div>
	)
}

export default ManScreen
