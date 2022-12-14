import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()

    const handleDelete = id => {
        const proceed = window.confirm('are sure to delete?');
        if (proceed) {
            const url = `https://frozen-basin-74760.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const proceed = window.confirm('are you sure to delete?')

                    if (proceed) {
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining)

                    }
                })
        }
    }
    return (
        <div>
            <h1>Mange your service</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>

                )
            }
        </div>
    );
};

export default ManageServices;