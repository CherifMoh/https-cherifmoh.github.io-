import React from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skills from './Skills';


export default function App() {
  return(
    <div className='container'>
      <Header />
      <Main />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}
