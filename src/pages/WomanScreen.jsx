import React from 'react'
import Card from '../components/Card';
import { Characters } from '../models/Characters';

const WomanScreen = () => {
	const womans = Characters.filter(man => man.type === "m")
	return (
		<div className="container mt-3">
			<h1>Womans Screen</h1>
			<div className="card-container">
				<div className="row">
					{womans.map((womman) => {
						return <Card key={womman.id} {...womman}></Card>;
					})}
				</div>
			</div>
		</div>
	)
}

export default WomanScreen
