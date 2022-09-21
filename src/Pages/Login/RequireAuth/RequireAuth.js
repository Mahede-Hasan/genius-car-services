import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <>
            <h3 className='text-center text-danger'>Your Email is not verified</h3>
            <h4 className='text-center text-info'>Please verify your email address</h4>
            <button className='btn btn-info'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification email
            </button>
            <ToastContainer></ToastContainer>
        </>
    }
    return children;
};

export default RequireAuth;