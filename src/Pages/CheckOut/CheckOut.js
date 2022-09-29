import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            serviceId: serviceId,
            service: service.name,
            address: event.target.address.value,
            number: event.target.number.value
        }

        axios.post('https://frozen-basin-74760.herokuapp.com/order', order)
            .then(response => {
                console.log(response)
                const { data } = response;
                if (data.insertedId) {
                    toast('your order is done')
                    event.target.reset();
                    navigate('/orders')
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mt-5 mb-5'>Please order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-3 ps-2 py-2' value={user?.displayName} type="text" readOnly disabled name='name' placeholder='name' required />
                <br />
                <input className='w-100 mb-3 ps-2 py-2' value={user?.email} readOnly disabled type="email" name='email' placeholder='email' required />
                <br />
                <input className='w-100 mb-3 ps-2 py-2' readOnly disabled type="text" value={service.name} name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-3 ps-2 py-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-3 ps-2 py-2' type="number" name='number' placeholder='number' required />
                <br />
                <input className='w-25 btn btn-info text-white fw-bold mb-5' type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default CheckOut;