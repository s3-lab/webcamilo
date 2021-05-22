import React from 'react';
import Header from '../components/header/Header';
import Banner from '../assets/img/banner.jpg';


import './home.scss';




function Home() {
return (

    <div>
        <Header/>
        <div className="hero_home">
            <div className="overlay_home">
                    <div className="contenedor contenido-hero_home">
                        <h1>yo soy otro tu, tu eres otro yo</h1>
                    </div>
            </div>
                <img src={Banner}  alt="hero"/>
        </div> 
    </div>
);
}

export default Home;