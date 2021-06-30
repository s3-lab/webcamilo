import {useState, useEffect} from 'react';


//este Hook es para hacer peticiones http a donde sea en este caso es para las entradas del blog

export default function useFetch(url, options) {

    //va adecir si la petición esta cargando o ya ha terminado
    const [loading, setLoading] = useState(true);
    const  [result, setResult] = useState(null);
    const [error, setError] =  useState(null);

    useEffect(() =>{
    (async () =>{
                    try {
                        const res = await fetch(url, options);
                        const json = await res.json();
                        setResult (json)
                        setLoading(false)
                    } catch (err) {
                        setError(err);
                        setLoading(false)
                    }
                })();
    }, [options, url]);

    return { loading, result, error};
}