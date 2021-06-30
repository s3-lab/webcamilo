import React, { useState } from 'react';
import Masonry from './Masonry';
import './Fotos_random.scss';


//variables



function Fotos_random() {
//arreglo de las imagenes 
    const imageUrls = [
        `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
        `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
    ];

    //Se coloca código estandar de javascrip en este espacio

    return( /* html en este espacio y { codigo js entre corchetes } */
            <div >
              <Masonry imageUrls={imageUrls} columnCount="2" gap="120"></Masonry>
            </div>
        );
      }


export default Fotos_random;