import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const {_id, img, name, description, price } = service;
    const navigate = useNavigate();
    const handleServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="service-info">
                <h2 className='service-name'>{name}</h2>
                <p>{description}</p>
                <h4>${price}</h4>
                <button onClick={()=>handleServiceDetail(_id)} className='cart-btn'>Get Service</button>
            </div>


        </div>
    );
};

export default Service;