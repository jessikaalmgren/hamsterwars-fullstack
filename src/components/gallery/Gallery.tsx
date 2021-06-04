import React from 'react'
import { useEffect, useState } from 'react'
import './Gallery.css'
import Form from './Form'
import {Hamster} from '../../types/hamster'
import HamsterCard from './HamsterCard'

const Gallery = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)
	

	useEffect(() => {
		async function getHamsters() {
			const response = await fetch('/hamsters', {method: 'GET'})
			const data: Hamster[] = await response.json()
			setHamsters(data)   
		}
		getHamsters()
		console.log('Utskriven')
	}, [])

	return (
		<div>
		<div className="wrapper-gallery">
			<h2>Våra hamstrar</h2>
			  <p>Här visar vi alla våra hamstrar! <br></br>Du kan ta bort en hamster om du vill, eller lägga till en hamster. <br></br>Önskar du att lägga till en hamster kommer ett formulär längst ner på sidan där du kan lägga till en ny hamster hos oss!</p>
		  <section className="gallery">
		  {hamsters ? hamsters.map((hamster) => (
			  <div key={hamster.id}>
				  <HamsterCard hamster={hamster} />
				  
			  </div>
		  ))
		  
		: 'No hamsters loaded yet'}
	
		  </section>
		</div>

		 <div className="formulär">
		 <Form />
	 </div>
	 </div>
	  );
	  
  }
  export default Gallery