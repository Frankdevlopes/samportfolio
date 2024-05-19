import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
