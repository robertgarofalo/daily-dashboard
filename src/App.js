import './App.css';
import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import News from './components/News';
import Weather from './components/Weather';
import Messages from './components/Messages';
import Calendar from './components/Calendar';
import Stocks from './components/Stocks';
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
      <Stocks />
      <Calendar />
      </div>

      <Footer />

    </div>
  );
}

export default App;
