import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const nameRef = useRef('')


    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleRegister = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/home')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center text-primary mt-4'>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button onClick={handleRegister} className='w-50' variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? <Link className='text-warning' to='/login'>Please Login</Link> </p>
            </Form>
        </div>
    );
};

export default Register;