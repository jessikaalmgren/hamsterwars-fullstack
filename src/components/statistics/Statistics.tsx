import React from 'react'
import './Statistics.css'
import FiveWinners from './FiveWinners'
import FiveLoosers from './FiveLoosers'


function Statistics() {
	return (
	  <div className="wrapper-grid">
		  <h2>Statistik över hamstrar</h2>
		<section className="statistics">
			<section className="winning">
				<FiveWinners />
			</section>
			<section className="losing">
				<FiveLoosers />
			</section>
		</section>
	  </div>
	);
  }

  export default Statistics