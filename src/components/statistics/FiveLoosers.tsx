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
					{loser.name}
					<img src={`${loser.imgName}`} alt="Bild på hamster"/>
					<p>Antal förlorande matcher: {loser.defeats}</p>
					<p>Antal spelade matcher: {loser.games}</p>
				</div>
			))
			: 'Hämtar förlorare '}
			<div className="box1">
			One hamster
			</div>
			<div className="box2">
			One hamster
			</div>
			<div className="box3">
			One hamster
			</div>
			<div className="box4">
			One hamster
			</div>
			<div className="box5">
			One hamster
			</div>
			
		</section>
	  </div>
	);
  }

  export default FiveLoosers