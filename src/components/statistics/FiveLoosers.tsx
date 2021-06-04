import React from 'react'
import {useState, useEffect} from 'react'
import './FiveLoosers.css'
import {Hamster} from '../../types/hamster'


const FiveLoosers = () => {
	const [losers, setLosers] = useState<Hamster[]>()
	
	useEffect(() => {
		async function getLosers() {
			const response = await fetch('/losers', {method: 'GET'})
			const data:Hamster[] = await response.json()
			console.log(data)
			setLosers(data)
			
		}
		getLosers()
	}, [])


	return (
	  <div className="wrapper-loosers">
		  <h3>De 5 hamstrarna som förlorat mest </h3>
		<section className="loosers">
			{losers ? losers.map(loser => (
				<div className="box1" key={loser.id}>
					<img src={`${loser.imgName}`} alt="Bild på hamster"/>
					<h3>{loser.name}</h3>
					<p>Antal förlorande matcher: {loser.defeats} st</p>
					<p>Antal spelade matcher: {loser.games} st</p>
				</div>
			))
			: 'Hämtar förlorare '}
			
		</section>
	  </div>
	);
  }

  export default FiveLoosers