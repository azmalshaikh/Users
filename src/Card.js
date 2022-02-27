import React from 'react'
import "./Card.css";

function Card({ data }) {

    return (
        <div className="card">
            <div className="card__info">
                <img src={data.avatar} alt="" className="card__infoImage" />
                <div className="card__infoDetails">
                    <h1 className="card__infoDetailsHeading">{data.first_name + " " + data.last_name}</h1>
                    <p className="card__infoDetailsText">Email - {data.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card