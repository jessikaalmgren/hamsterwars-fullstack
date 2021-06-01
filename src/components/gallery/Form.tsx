import React from 'react'
import {useState} from 'react'
import './Form.css'


function Form() {
	const [nameInput, setNameInput] = useState('')
	const [fieldTouched, setFieldTouched] = useState(false)

	const [ageInput, setAgeInput] = useState('')
	const [ageTouched, setAgeTouched] = useState(false)

	const [foodInput, setFoodInput] = useState('')
	const [foodTouched, setFoodTouched] = useState(false)

	const [hobbyInput, setHobbyInput] = useState('')
	const [hobbyTouched, setHobbyTouched] = useState(false)

	const [urlInput, setUrlInput] = useState('')
	const [urlTouched, setUrlTouched] = useState(false)
	
	//Validering för name
	let nameIsValid:boolean = (nameInput !== '')
	let nameErrorMessage:string = ''
	if (nameInput === '') {
		nameIsValid = false
		nameErrorMessage = 'Vänligen skriv in ett namn'
	}
	let nameClass = ''
	if (fieldTouched){
		nameClass = (nameIsValid ?  'valid' : 'error')
	}

	//Validering för age
	let ageIsValid:boolean = (ageInput !== '')
	let ageErrorMessage:string = ''
	if (ageInput === ''){
		ageIsValid = false
		ageErrorMessage = 'Vänligen skriv in en ålder'
	}
	let ageClass = ''
	if (ageTouched){
		ageClass = (ageIsValid ? 'valid' : 'error')
	}

	//Validering för favoritmat 
	let foodIsValid:boolean = (foodInput !== '')
	let foodErrorMessage:string = ''
	if (foodInput === ''){
		foodIsValid = false
		foodErrorMessage = 'Vänligen skriv in favoritmat'
	}
	let foodClass = ''
	if(foodTouched){
		foodClass = (foodIsValid ? 'valid' : 'error')
	}

	//Validering för hobby
	let hobbyIsValid:boolean = (hobbyInput !== '')
	let hobbyErrorMessage:string = ''
	if (hobbyInput === ''){
		hobbyIsValid = false
		hobbyErrorMessage = 'Vänligen skriv in en hobby'
	}
	let hobbyClass = ''
	if (hobbyTouched){
		hobbyClass = (hobbyIsValid ? 'valid' : 'error')
	}

	//Validering för Url
	let urlIsValid:boolean = (urlInput !== '')
	let urlErrorMessage:string = ''
	if (urlInput === ''){
		urlIsValid = false
		urlErrorMessage = 'Vänligen skriv in url:en till bilden'
	}
	let urlClass = ''
	if (urlTouched){
		urlClass = (urlIsValid ? 'valid' : 'error')
	}
	

	return (
	  <div className="wrapper-form">
		  <h3>LÄGG TILL EN HAMSTER</h3>
		<section className="form">
			<div>
			<label>Namn:<br/>
			<input type="text" placeholder="Namn" required 
			onChange={event => {console.log(event.target.value); setNameInput(event.target.value)}} value={nameInput}
			onBlur={() => setFieldTouched(true)}
			className={nameClass} 
			
			></input></label>
			{fieldTouched ? <div className="message"> {nameErrorMessage}</div> : null}
			</div><br/><br/>

			<div>
			<label>Ålder:<br/>
			<input type="number"  required min="0" max="100" placeholder="Ålder" 
			onChange={event => {console.log(event.target.value);
			setAgeInput(event.target.value)}} value={ageInput}
			onBlur={() => setAgeTouched(true)}
			className={ageClass}
			
			></input></label>
			{ageTouched ? <div className="message"> {ageErrorMessage}</div> : null}
			</div><br/><br/>

			<div>
			<label>Favoritmat:<br/>
			<input type="text" placeholder="Favoritmat" required
			onChange={event => {console.log(event.target.value);
			setFoodInput(event.target.value)}} value={foodInput}
			onBlur={() => setFoodTouched(true)}
			className={foodClass}
			></input></label>
			{foodTouched ? <div className="message"> {foodErrorMessage}</div> : null}
			</div><br/><br/>

			<div>
			<label>Hobby:<br/>
			<input type="text" placeholder="Hobby" required
			onChange={event => {console.log(event.target.value); 
			setHobbyInput(event.target.value)}} value={hobbyInput}
			onBlur={() => setHobbyTouched(true)}
			className={hobbyClass}
			></input></label>
			{hobbyTouched ? <div className="message"> {hobbyErrorMessage}</div> : null}
			</div><br/><br/>

			<div>
			<label>Url till bild:<br/>
			<input type="text" required placeholder="Url till bild" 
			onChange={event => {console.log(event.target.value);
			setUrlInput(event.target.value)}} value={urlInput}
			onBlur={()=> setUrlTouched(true)}
			className={urlClass}
			></input></label>
			{urlTouched ? <div className="message"> {urlErrorMessage}</div> : null}
			</div><br/><br/><br/>

			<button>LÄGG TILL HAMSTER</button>
		</section>
	  </div>
	);
  }

  export default Form