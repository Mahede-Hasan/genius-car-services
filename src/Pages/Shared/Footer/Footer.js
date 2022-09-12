import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='text-center'>
            <p>copy right © {year}</p>
        </div>
    );
};

export default Footer;