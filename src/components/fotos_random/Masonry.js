import React, { useState } from 'react';

function Masonry(props) {
    return(

        //Se traen las imagenes por props, luego se utiliza map para crear un nuevo arreglo i es indice, "key" es un atributo de string que debes incluir al crear listas de elementos

        <div className="contenedor" style={{columns: props.columnCount, columnGap: 0}}>
            {props.imageUrls.map((img, i)=> 
                <img src={img} key={i} className="image" style={{padding: props.gap/2}}/>
            )}
        </div>
    )

}


export default Masonry;