import React from 'react';
import './App.css';
import Header from './header/Header'
import Landing from './landing/Landing'
import Compete from './compete/Compete'
import Gallery from './gallery/Gallery'
import Statistics from './statistics/Statistics'
import History from './history/History'
import Footer from './footer/Footer'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
	  <Router>
    <div className="App">
      <header className="App-header">
       <Header />
	   <div className="rubrik">
	   <Link to="/">HAMSTERWARS</Link>
	   </div>
	   <nav>
		   <Link to="/tävla"> TÄVLA</Link> 
		   <Link to="/galleri"> GALLERI</Link> 
		   <Link to="/statistik"> STATISTIK</Link> 
		   <Link to="/historik"> HISTORIK</Link> 
	   </nav>
      </header>
	  <main className="content">
		  <Switch>
	  <Route path="/tävla"> <Compete/> </Route>
	  <Route path="/galleri"> <Gallery/> </Route>
	  <Route path="/statistik"> <Statistics/> </Route>
	  <Route path="/historik"> <History/> </Route>
	  <Route path="/"> <Landing/> </Route>
	  </Switch>
	  </main>
	  <section className="footer">
		  <Footer />
	  </section>
    </div>
	</Router>
  );
}

export default App;
