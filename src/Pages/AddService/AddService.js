import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Added Service</h1>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 ps-2 py-1' placeholder='Name' {...register("name")} />
                <input className='mb-2 ps-2 py-1' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 ps-2 py-1' placeholder='Image URL' type="text" {...register("img")} />
                <textarea className='mb-2 ps-2 py-2' placeholder='Description' {...register("description")} />
                <input className='w-50 mb-5' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;