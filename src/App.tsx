import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Landing from './components/landing/Landing'
import Compete from './components/compete/Compete'
import Gallery from './components/gallery/Gallery'
import Statistics from './components/statistics/Statistics'
import History from './components/history/History'
import Footer from './components/footer/Footer'
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
		   <Link to="/battle"> TÄVLA</Link> 
		   <Link to="/gallery"> GALLERI</Link> 
		   <Link to="/statistics"> STATISTIK</Link> 
		   <Link to="/history"> HISTORIK</Link> 
	   </nav>
      </header>
	  <main className="content">
		  <Switch>
	  <Route path="/battle"> <Compete/> </Route>
	  <Route path="/gallery"> <Gallery/> </Route>
	  <Route path="/statistics"> <Statistics/> </Route>
	  <Route path="/history"> <History/> </Route>
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
