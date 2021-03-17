import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import News from './components/News';
import Weather from './components/Weather';
import Messages from './components/Messages';
import CalendarComponent from './components/CalendarComponent';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      
      <div>
        <Header />
        <SecondaryHeader />
      </div>

      <div className="app-main-container">
      <News />
      <Weather />
      <Messages />
      <CalendarComponent/>
      </div>

      <Footer />

    </div>
  );
}

export default App;
