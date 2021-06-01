import React from 'react'
import './Gallery.css'
import Form from './Form'


function Gallery() {
	return (
	  <div className="wrapper-gallery">
		  <h2>Våra hamstrar</h2>
		<section className="gallery">
			<div className="grid1">
			hamster1
			</div>
			<div className="grid2">
			hamster2
			</div>
			<div className="grid3">
			hamster3
			</div>
			<div className="grid4">
			hamster4
			</div>
		</section>
		<div className="gallery-form">
			<Form />
		</div>
	  </div>
	);
  }

  export default Gallery