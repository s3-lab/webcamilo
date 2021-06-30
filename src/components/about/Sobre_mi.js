import React from 'react';
import './Sobre_mi.scss';
import About_imagen from '../../assets/img/about.jpg'


function Sobre_mi() {

    //Se coloca código estandar de javascrip en este espacio

    return( /* html en este espacio y { codigo js entre corchetes } */

        <div className="contenedor__entrada">
            <div className="about">
                <div className="about__imagen">
                <img src={About_imagen}  alt="hero"/>
                </div>
                <div className="about__texto">
                    <p> Camilo diaz was an colombian photographer, best known for his black-and-white
                         photographs. His work featured an array of subjects, fashion, documentary and 
                         still-life images. His most controversial works documented and examined the 
                         gay male BDSM subculture of Bogotá in the late 2019s and early 2020s.</p>
                         
                         <p>
                         A 2021 exhibition of Camilo Diaz´s work, titled Camila the nigga: The Perfect Color, sparked 
                         a debate in the Argentina concerning both use of public funds for "obscene colors"
                         artwork and the Constitutional limits of free speech in the Argentina and colombia.</p>

                         <p> For freelance enquires email info.camilodiaz@gmail.com </p>
                        
                </div>
            </div>
        </div>
    )
}


export default Sobre_mi;