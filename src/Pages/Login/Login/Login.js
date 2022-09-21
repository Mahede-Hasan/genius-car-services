import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleResetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address')
        }
    }

    let errorElement;
    if (error) {
        errorElement = <p>Error: {error.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title='Login'></PageTitle>
            <h1 className='text-center text-info mt-4'>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <div className=''>
                    <Button className='w-50 d-block mx-auto text-white fs-6 fw-bold' variant="info" type="submit">
                        Login
                    </Button>
                </div>
                <p>{errorElement}</p>
                <p className='mt-3'>New here Genius car? <Link className='text-primary' to='/register'>Please Register</Link> </p>

                <p className='mt-3'>Forget Password?
                    <a className='text-primary ps-2' href="#" onClick={handleResetPass}>Reset Password</a></p>
            </Form>
            <Social></Social>
            <ToastContainer />
        </div>

    );
};

export default Login;