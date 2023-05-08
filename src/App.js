import React from 'react';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import JumbotronExamples from './components/JumbotronExamples';
import JustHeroes from './components/JustHeroes';
import Carousel from './components/Carousel';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SideMenu from './components/SideMenu';
import TextExtractor from './components/TextExtractor';

const App = () => {
  return (
    <>
      <Navigation />
      <JustHeroes />
      <Carousel />
      <SideMenu />
      <JumbotronExamples />
      <TextExtractor />
      <Footer />
    </>
  );
};

export default App;
