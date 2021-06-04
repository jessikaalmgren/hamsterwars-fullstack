import React from 'react'
import './Landing.css'
import { BrowserRouter as Router, Link,  } from 'react-router-dom';

function LandingContent() {
	return (
	  <div className="wrapper-landing">
		<section className="content1">
			<h1>Vad är Hamsterwars?</h1>
			<p>Hamsterwars är en app som redovisar hamstrar. Ditt uppdrag är att rösta på den hamstern du
			tycker är sötast. 
			Du kan även se vårt galleri där vi samlat alla våra hamstrar, du kan se statistik över matcher samt historik på senast spelade matcher.</p>
		</section>
		<section className="content2">
			<h1>Såhär använder du Hamsterwars</h1>
			<p>För att vara med och tävla och rösta på vilken hamster du tycker är sötast tryck 
				<Link to="/tävla"><b>här</b></Link>, eller tryck 
			på länken <b>TÄVLA</b> i navigationen. <br/> <br/>
			I <i>galleriet</i> hittar du varje hamster som finns registrerad hos oss. Där kan du även se mer 
			information om varje hamster om du önskar.<br/> <br/>
			I <i>statistik</i> kan du se de 5 hamstrarna som vunnit mest och de 5 hamstrar som har förlorat mest.<br/> <br/> 
			Om du är nyfiken på vilka matcher som har skett mellan olika hamstrar, klicka dig in på <i>historik</i>,
			där samlas de senast spelade matcherna. </p>
		</section>
	  </div>

	);
  }

  export default LandingContent