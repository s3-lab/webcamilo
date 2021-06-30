import React from 'react';
import Header from '../components/header/Header';
import Titulos_hero from '../components/tituloshero/Titulos_hero';
import Sobre_mi from '../components/about/Sobre_mi';
import Footer from '../components/Footer/Footer';


function About() {
    return( 
    <div>
          <Header/>
          <Titulos_hero pagina='About'/>
            <Sobre_mi />
            <Footer/>
        </div>
    )
};


export default About;