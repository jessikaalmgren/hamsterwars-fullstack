import React from 'react';
import './App.css';
import Header from './header/Header'
import Landing from './landing/Landing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/> 
      </header>
	  <section className="content">
	  <Landing />
	  </section>
	  <section className="footer">
		  <h1>Footer</h1>
	  </section>
    </div>
  );
}

export default App;
