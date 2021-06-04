import React from 'react'
import './History.css'
import {useEffect, useState} from 'react'
import {Matches} from '../../types/matches'
import {Hamster} from '../../types/hamster'

const History = () => {
	const [matches, setMatches] = useState<null | Matches[]>(null)
	const [getHamsters, setGetHamsters] = useState<null | Hamster[]>(null)
	const [updateMatches, setUpdateMatches] = useState(false)
	

	useEffect(() => {
		async function getMatches() {
			const response = await fetch('/matches', {method: 'GET'})
			const data: Matches[] = await response.json()
			setMatches(data)   
			setUpdateMatches(false)
		}
		getMatches()
	}, [updateMatches])

	useEffect(() => {
		async function getTheHamsters(){
			const response = await fetch('/hamsters', {method: 'GET'})
			const data: Hamster[] = await response.json()
			setGetHamsters(data)
		}
		getTheHamsters()
	}, [])

	async function deleteAMatch(match:Matches){
		await fetch (`/matches/${match.id}`, {method: 'DELETE'})
		console.log('Deleted: ')
		setUpdateMatches(true)
	}


	return (
	  <div className="wrapper-history">
		  <h2>Senast spelade matcher</h2>
		<section className="container">
		<div className="onematch"> 
			{matches ? matches.map(match => {
				if(!getHamsters) return 'Todo'

				let winner = getHamsters.find(({id})=> id === match.winnerId);
				let loser = getHamsters.find(({id})=> id === match.loserId)
				if(!winner) return <div className="onematch">Den här matchen finns tyvärr inte<button onClick={() => deleteAMatch(match)}>TA BORT MATCH</button></div>
				if(!loser) return <div className="onematch">Den här matchen finns tyvärr inte<button onClick={() => deleteAMatch(match)}>TA BORT MATCH</button></div>
				console.log('Vinnande hamster i en match', winner, match)
				console.log(winner, match, loser)
				if(!loser) return 'Hittar ingen förlorare'
				return <div className="onematch"> 
				<div className="winner" key={match.winnerId}>
					 <img src={`${winner.imgName}`} alt="Bild på hamster"/>
					<p>Vinnare: {winner.name}</p>
					
					</div>
					<div className="loser" key={match.loserId}>
					<img src={`${loser.imgName}`} alt="Bild på hamster"/>
					<p>Förlorare: {loser.name}</p>
					<button className="buttondelete"onClick={() => deleteAMatch(match)}>TA BORT MATCH</button>
				</div>
				</div>
				
			}) 
			: 'Hämtar matcher'}
		
		</div>
		</section>
	  </div>
	);
}

  export default History