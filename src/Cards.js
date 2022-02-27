import React from 'react'
import Card from './Card';
import "./Cards.css";

function Cards({ obj }) {

    return (
        <div className='cards'>
            <div className="cards__row">
                <Card data={obj[0]} />
                <Card data={obj[1]} />
                <Card data={obj[2]} />
            </div>
        </div>
    )
}

export default Cards