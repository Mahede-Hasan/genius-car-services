import React from 'react';
import './Social.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    let errorEle;
    if (error || error1) {
        errorEle = <p>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }



    return (
        <div>
            <p className='text-danger'> {errorEle}</p>
            <div className="dividers d-flex align-items-center">

                <div style={{ height: '1px' }} className="divider w-50 bg-secondary"></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{ height: '1px' }} className="divider w-50 bg-secondary"></div>
            </div>
            <div className='social-btn-container'>
                <button className='facebook-btn mb-2 d-block w-50 mx-auto d-flex align-items-center justify-content-center'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='ps-2'>
                        CONTINUE WITH FACEBOOK
                    </span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='github-btn mb-2 w-50 d-block mx-auto d-flex align-items-center justify-content-center'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='ps-2'>CONTINUE WITH GITHUB</span>
                </button>
                <button onClick={() => signInWithGoogle()}
                    className='google-btn mb-2 d-block w-50 mb-5 mx-auto d-flex align-items-center justify-content-center'>
                    <img src={google} alt="" />
                    <span className='ps-2'>CONTINUE WITH GOOGLE</span>
                </button>
            </div>
        </div>
    );
};

export default Social;