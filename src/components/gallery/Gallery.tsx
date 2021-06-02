import React from 'react'
import { useEffect, useState } from 'react'
import './Gallery.css'
import Form from './Form'
import {Hamster} from '../../types/hamster'

const Gallery = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)
	

	useEffect(() => {
		async function getHamsters() {
			const response = await fetch('/hamsters', {method: 'GET'})
			const data: Hamster[] = await response.json()
			setHamsters(data)   
		}
		getHamsters()
	}, [])
	


	return (

	  <div className="wrapper-gallery">
		  <h2>Våra hamstrar</h2>

		<section className="gallery">
		{hamsters ? hamsters.map(hamster => (
			<div className="grid" key={hamster.id}>
				  <img src={`${hamster.imgName}`} alt="Bild på hamster"/>
				<p>{hamster.name}</p>
			</div>
		
		))
		: 'No reusults yet'}
		</section>
		<div className="gallery-form">
			<Form />
		</div>
	  </div>
	);
}

  export default Gallery