import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import News from './components/News';
import Weather from './components/Weather';
import Messages from './components/Messages';
import CalendarComponent from './components/CalendarComponent';
import Footer from './components/Footer';


function App() {

  const [currentComponentSelected, setCurrentComponentSelected ] = useState('Dashboard');


  return (
    <div className="App">
      
      <div>
        <Header/>
        <SecondaryHeader currentComponent={(el) => {setCurrentComponentSelected(el)}}/>
      </div>

      <div className="app-main-container">
      <News currentComponentSelected={currentComponentSelected}/>
      <Weather currentComponentSelected={currentComponentSelected}/>
      <Messages currentComponentSelected={currentComponentSelected}/>
      <CalendarComponent currentComponentSelected={currentComponentSelected}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
