import React from 'react';
import './CardItem.scss'

export default ({ imgSrc, name, year, genre }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={imgSrc} />
            </div>
            <div className='card-description'>
                <p className='card-film-name'>{name}<span>{year}</span></p>
                <p className='card-genre'>{genre}</p>
            </div>
        </div>
    )
}
