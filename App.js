import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
