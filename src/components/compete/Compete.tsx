import React from 'react'
import {useState, useEffect} from 'react'
import './Compete.css'
import {Hamster} from '../../types/hamster'


const Compete = () => {

	const [randomHamster1, setRandomHamster1] = useState<null | Hamster>(null)
	const [randomHamster2, setRandomHamster2] = useState<null | Hamster> (null)
	const [voted, setVoted] = useState(false)
	const [resultWinner, setResultWinner] = useState<any>(null)
	const [resultLoser, setResultLoser] = useState<any>(null)
	const [newGame, setNewGame] = useState(false)

	useEffect(() => {
		async function getFirstHamster() {
			const response = await fetch('/hamsters/random', {method: 'GET'})
			const data: Hamster = await response.json()
			setRandomHamster1(data)   
			setVoted(false)
			setNewGame(false)
		}
		getFirstHamster()
	}, [newGame])

	useEffect(() => {
		async function getSecondHamster() {
			const response = await fetch('/hamsters/random', {method: 'GET'})
			const data: Hamster = await response.json()
			setRandomHamster2(data)  
			setVoted(false) 
			
		}
		getSecondHamster()
	}, [newGame])
	
	function voting(winner:Hamster, loser:Hamster){
		if(winner && loser){
			const updateWins = {
				wins: winner.wins +1,
				games: winner.games +1,
			}
			const updateDefeats = {
				defeats: loser.defeats +1, 
				games: loser.games +1,
			}

			if(randomHamster1 && randomHamster2){
				let gameWinner:Hamster
				let gameLoser:Hamster
				if(randomHamster1.id === winner.id){
					gameWinner = randomHamster1
					gameLoser = randomHamster2
				} else {
					gameWinner = randomHamster2
					gameLoser = randomHamster1
				}
				gameWinner.wins = winner.wins+1
				gameWinner.games = winner.games+1
				gameLoser.defeats = loser.defeats+1
				gameLoser.games = loser.games+1

				setResultWinner(gameWinner)
				setResultLoser(gameLoser)
				
				Promise.all([
					putRequestHamster(winner.id, updateWins),
					putRequestHamster(loser.id, updateDefeats),
					postRequestMatch(winner.id, loser.id)
				]).then(() => {
					setVoted(true)
				})

				console.log('Winner: ' + gameWinner.name, 'Loser: ' + gameLoser.name)
			}
		}
	}

	async function putRequestHamster(id:string|number, update:any){
		const response = await fetch(`/hamsters/${id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(update)})
		const data = await response.text()
		console.log('Skickat. ' + data)
	}

	async function postRequestMatch(winnerId:string|number, loserId:string|number) {
		const matchToSend = {winnerId: winnerId, loserId: loserId }
		const response = await fetch(`/matches`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(matchToSend) })
		const data = response.text()
		console.log('Skickat: ' + data)

	}
	
	function vote(){
		if(!voted){
			if(randomHamster1 && randomHamster2){
				return (
					<section className="compete">
						{randomHamster1 ? <div className="hamster1" key={randomHamster1.id}>
				<h3>{randomHamster1.name}</h3>
				<img src={`${randomHamster1.imgName}`} alt="Bild p?? hamster"
				onClick={() => voting(randomHamster1,randomHamster2)}/>
				<p><b>Hobby: </b>{randomHamster1.loves}</p>
				<p><b>Favoritmat: </b>{randomHamster1.favFood}</p>
			</div>
			: 'H??mtar en hamster...'}
			{randomHamster2 ? <div className="hamster2" key={randomHamster2.id}>
				<h3>{randomHamster2.name}</h3>
				<img src={`${randomHamster2.imgName}`} alt="Bild p?? hamster" onClick={() => voting(randomHamster2, randomHamster1)}/>
				<p><b>Hobby: </b>{randomHamster2.loves}</p>
				<p><b>Favoritmat: </b>{randomHamster2.favFood}</p>
			</div>
			: 'H??mtar en hamster...'}
					</section>
				)
			}
		}
	}

	function playAgain(){
		setNewGame(true)
	}

	function whenVoted(){
		if(voted){
			if(resultWinner && resultLoser){
				return (
					<section className="compete">
						{resultWinner ? <div className="hamster1" key={resultWinner.id}>
							<h3>Vinnare!</h3>
							<h5>{resultWinner.name}</h5>
							<img src={`${resultWinner.imgName}`} alt="Bild p?? hamster"/>
							<p><b>Vunna matcher: </b>{resultWinner.wins} st</p>
							<p><b>F??rlorade matcher: </b>{resultWinner.defeats} st</p>
						</div>
						: 'Laddar vinnande hamster'}
						{resultLoser ? <div className="hamster2" key={resultLoser.id}>
						<h3>F??rlorare!</h3>
							<h5>{resultLoser.name}</h5>
							<img src={`${resultLoser.imgName}`} alt="Bild p?? hamster"/>
							<p><b>Vunna matcher: </b>{resultLoser.wins} st</p>
							<p><b>F??rlorade matcher: </b>{resultLoser.defeats} st</p>
						</div>
						: 'Laddar f??rlorande hamster'}
						<button onClick={playAgain}>SPELA IGEN</button>
					</section>
				)
			}
		}
	}

	const done = vote()
	const result = whenVoted()

	return (
	  <div className="wrapper-compete">
		  <h2>Klicka p?? den hamstern du tycker ??r s??tast!</h2>
		  <h4>F??r att r??sta klickar du p?? den hamstern du tycker ??r s??tast! <br></br> Resultatet kommer visas direkt n??r du har r??stat. <br></br>Om du vill spela igen s?? klicka p?? knappen <b>Spela igen</b> som visas i samband med resultatet! </h4>
		  {done} 
		  {result}
		<section className="compete">
			
		</section>
	  </div>
	);
  }

  export default Compete