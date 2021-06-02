import React from 'react'
import {useState, useEffect} from 'react'
import './FiveWinners.css'
import {Hamster} from '../../types/hamster'


const FiveWinners = () => {
	const [winners, setWinners] = useState<Hamster[]>()
	
	useEffect(() => {
		async function getWinners() {
			const response = await fetch('/winners', {method: 'GET'})
			const data:Hamster[] = await response.json()
			console.log(data)
			setWinners(data)
			
		}
		getWinners()
	}, [])



	return (
	  <div className="wrapper-winners">
		  <h3>De 5 hamstrarna som vunnit mest</h3>
		<section className="winners">
			{winners ? winners.map(winner => (
				<div className="box1" key={winner.id}>
					<img src={`${winner.imgName}`} alt="Bild på hamster"/>
					{winner.name}
					<p>Antal vunna matcher: {winner.wins}</p>
					<p>Antal spelade matcher: {winner.games}</p>
				</div>
			))
			: 'Hämtar vinnare'}
			
		</section>
	  </div>
	);
  }

  export default FiveWinners