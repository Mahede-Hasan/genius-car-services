import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>welcome to service {serviceId}</h2>
            <Link to='/checkout'><button>Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;