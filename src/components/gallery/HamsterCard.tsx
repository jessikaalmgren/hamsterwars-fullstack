import React from 'react'
import {  useState } from 'react'
import './HamsterCard.css'
import {Hamster} from '../../types/hamster'
import {Matches} from '../../types/matches'

interface Props {
	hamster: Hamster
}


const HamsterCard = ({ hamster }: Props) => {
	const [defeated, setDefeated] = useState<Matches[]>()
	const [localHamsters, setLocalHamsters] = useState<null | Hamster[]>
	(null)
	

	async function getLocalHamsters() {
			const response = await fetch('/hamsters', {method: 'GET'})
			const data: Hamster[] = await response.json()
			setLocalHamsters(data)   
		}
		console.log('Utskriven3')
	
	
	async function deleteAHamster(hamster:Hamster){
		await fetch (`/hamsters/${hamster.id}`, {method: 'DELETE'})
		console.log('Deleted: ')
	}

	

	async function getDefeated(hamster:Hamster) {
		const response = await fetch (`/matchwinners/${hamster.id}`, {method: 'GET'})
		if(response.ok){
			const data: Matches[] = await response.json()
			console.log(data)
			setDefeated(data)
			getLocalHamsters()
		}else {
			setDefeated([])
			
		}
	}

	function showData(){
		if(hamster && defeated){
			return (
				<div className="defeatedhamsters">
					{defeated ? defeated.map(defeat => {
						if(!localHamsters) return 'Hamstern är tyvärr borttagen'

						let matching = localHamsters.find(({id}) => id === defeat.loserId)

						if(!matching) return 'Hamstern är tyvärr borttagen'
						console.log('Vinnande hamster i en match', matching)
						return <div className="defeatedhamsters"key={matching.id}>
					{matching.name}
					
				</div>
				
				
				})
				: 'Hämtar'}
				</div>
			)
		}
	}

	const show = showData()

	return (

		<div className="wrapper-gallery">
		  <section >
		  <div className="hamsterinfo">
		  <img src={`${hamster.imgName}`} alt="Bild på hamster"/>
		  {hamster.name}
		  		<p><b>Hobby: </b>{hamster.loves}</p>
				<p><b>Favoritmat: </b>{hamster.favFood}</p>
				<button onClick={() => deleteAHamster(hamster)}>Ta bort Hamster</button>
				<div onClick={()=> getDefeated(hamster)}>
					<p className="matchwinners-link">Klicka för att se besegrade</p>
					</div>
					<h5 className="defeatedhamsters">{show}</h5>
		  </div>
			  
		  {localHamsters ? localHamsters.map(hamster => (
			  <div key={hamster.id}> 
			
			  </div>
		  
		  ))
		  : null}
		  </section>
		</div>
	  );
  }
export default HamsterCard