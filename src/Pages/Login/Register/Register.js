import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const nameRef = useRef('')
   
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleSubmit = event => {
        event.preventDefault();
    }

    if (user) {
        console.log(user)
    }
    if(loading || updating){
        return <Loading></Loading>
    }
    const handleRegister = async() => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
       await createUserWithEmailAndPassword(email, password)
       await updateProfile({ displayName: name });
       navigate('/home')

    }

    
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center text-info mt-4'>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 text-primary" controlId="formBasicCheckbox">
                
                    <Form.Check className={agree? 'text-primary': 'text-danger'}  onClick={()=> setAgree(!agree)} type="checkbox" label="Accept Genius Car terms and conditions" />
                </Form.Group>

                <Button disabled={!agree} onClick={handleRegister} className='d-block mx-auto mb-2 w-50 text-white fw-bold fs-6' variant="info" type="submit">
                    Register
                </Button>

                <p>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link> </p>
            </Form>
            <Social></Social>
        </div>
    );
};

export default Register;