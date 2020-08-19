import React from 'react'

export const GifGridItem = ( { title, url} ) => {
    return (
        <div className="card animate__animated animate__flipInX animate__delay-1s">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}
