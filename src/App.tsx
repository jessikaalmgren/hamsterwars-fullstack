import React from 'react';
import './App.css';
import Header from './header/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/> 
      </header>
	  <section className="content">
	  <h3>Content</h3>
	  </section>
	  <section className="footer">
		  <h1>Footer</h1>
	  </section>
    </div>
  );
}

export default App;
