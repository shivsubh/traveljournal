import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div>
                 <img src={`../images/${props.item.imageUrl}`} className="card--img" alt="card--img"/>
            </div>
            <div>
                <img src="../images/location-logo.png" className="card--locationimg" alt="locationlogo"/>
                <span className="card--location">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} className="card--gmap">View on Google Maps</a>
                <h1 className="card--title>">{props.item.title}</h1>
                <span className="card--date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card--des">{props.item.description}</p>
            </div>

        </div>
    )
}