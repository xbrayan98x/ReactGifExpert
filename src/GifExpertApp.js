import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

    const [categorias, setCategorias] = useState( [] );
    //const handleAdd = () => setCategorias( cats => [...cats, 'brayan'] );
    //<button onClick={ handleAdd }>handleAdd</button

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />
           
            <ol>
                {
                    //categorias.map( cat => {
                    //return <li key={ cat }>{ cat }</li>
                    //})

                    categorias.map( cat => ( 
                        <GifGrid key={ cat } categoria={ cat} /> 
                    ))
                }
            </ol>
        </>
        
    )
};

export default GifExpertApp;