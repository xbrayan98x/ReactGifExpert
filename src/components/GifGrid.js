import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ categoria }) => {

    //const [ imgs, setImages ] = useState( [] );
    const { data:images, loading } = useFetchGifs( categoria );

    /*useEffect( () => {
        getGifs( categoria )
            //.then( imgs => setImages( imgs) );
            .then( setImages );
    }, [ categoria ]);
    */

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ categoria }</h3>
            { loading && <p className="animate__animated animate__flash">Loading..</p>}
            <div className="card-grid">
            {
                images.map( img => ( 
                    <GifGridItem key={ img.id } { ...img } />
                ))
            }
            </div>
        </>
    )
}
