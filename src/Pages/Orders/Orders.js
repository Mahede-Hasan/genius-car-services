import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `https://frozen-basin-74760.herokuapp.com/orders?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrder()
    }, [user])
    return (
        <div className='text-center mt-4'>
            <h1>This is order page</h1>
            <h2>Order available {orders.length}</h2>
            {
                orders.map(order=> <div key={order._id}>
                    <p>{order.email} : {order.service} : {order.address}</p>
                </div>)
            }
        </div>
    );
};

export default Orders;