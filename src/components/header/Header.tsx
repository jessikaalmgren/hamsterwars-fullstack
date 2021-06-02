import React from 'react'
import './Header.css'
import background from '../../assets/flowers.jpeg'


function Header() {
	return (
	  <div className="App">
		<header className="App-header">
			<img src={background} alt="Web" />
			
		</header>
	  </div>
	);
  }

  export default Header