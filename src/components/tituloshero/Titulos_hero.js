import React from 'react';
import '../tituloshero/Titulos_hero.scss';



function Titulos_hero(props) {

//props para pasar los datos en este caso cambiar el titulo del hero


    return( 
        <div className="hero">
        <div className="overlay">
                <div className="contenedor contenido-hero">
                    <h1>{props.pagina}</h1>
                </div>
        </div>
    </div> 
    )
}


export default Titulos_hero;