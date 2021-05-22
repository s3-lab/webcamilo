import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';


function Header({titulo}) {



    //Se coloca código estandar de javascrip en este espacio

    return( /* html en este espacio y { codigo js entre corchetes } */
        <header class="header" >
            <div class="contenedor">
            <div class="barra">
                <Link to='/home'><a class="logo" href="index.html">
                <h1 class="no-margin centrar-texto">C</h1>
                </a>
                </Link>

                <nav class="navegacion">
                    <Link to='/works'><a href="" class="navegacion__enlace">Works</a></Link>
                    <Link to='/blog'><a href="" class="navegacion__enlace">Blog</a></Link>
                    <Link to='/prints'><a href="" class="navegacion__enlace">Prints</a></Link>
                    <Link to='/about'><a href="" class="navegacion__enlace">About</a></Link>
                    <Link to='/contact'><a href="" class="navegacion__enlace">Contact</a></Link>
                </nav>
            </div>
        </div>
    </header>
    )
}


export default Header;