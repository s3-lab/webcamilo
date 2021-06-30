import React from 'react';
import Header from '../components/header/Header';
import Titulos_hero from '../components/tituloshero/Titulos_hero';
import Fotos_random from '../components/fotos_random/Fotos_random';
import Footer from '../components/Footer/Footer';


function Works() {
    return( 
        <div >
          <Header/>
          <Titulos_hero pagina='works'/>
          <Fotos_random />
          <Footer/>
    </div>
    )
}


export default Works;