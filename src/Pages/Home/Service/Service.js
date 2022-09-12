import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { img, name, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="service-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>${price}</h4>
                <button className='cart-btn'>Get Service</button>
            </div>


        </div>
    );
};

export default Service;