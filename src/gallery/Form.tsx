import React from 'react'
import {useState} from 'react'
import './Form.css'


function Form() {
	const [inputText, setInputText] = useState('')

	return (
	  <div className="wrapper-form">
		  <h3>LÄGG TILL EN HAMSTER</h3>
		<section className="form">

			<label>Namn:<br/>
			<input type="text" placeholder="Namn" onChange={event => {console.log(event.target.value); setInputText(event.target.value)}} value={inputText} ></input></label><br/><br/>
			<label>Ålder:<br/>
			<input type="number" min="0" max="100" placeholder="Ålder" ></input></label><br/><br/>
			<label>Favoritmat:<br/>
			<input type="text" placeholder="Favoritmat" ></input></label><br/><br/>
			<label>Hobby:<br/>
			<input type="text" placeholder="Hobby" ></input></label><br/><br/>
			<label>Url till bild:<br/>
			<input type="text" placeholder="Url till bild" ></input></label><br/><br/><br/>

			<button>LÄGG TILL HAMSTER</button>
		</section>
	  </div>
	);
  }

  export default Form