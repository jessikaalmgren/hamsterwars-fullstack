import React from 'react'
import './Header.css'
import background from '../assets/flowers.jpeg'

function Header() {
	return (
	  <div className="App">
		<header className="App-header">
			<img src={background} alt="Web" />
			<h1>HAMSTERWARS</h1>
			<div className="navlinks">
			<p>TÄVLA</p>
			<p>GALLERI</p>
			<p>STATISTIK</p>
			<p>HISTORIK</p>
		
			</div>
			
		</header>
	  </div>
	);
  }

  export default Header