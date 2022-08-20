import React from 'react';
import './information.css';

const Information = () => {
    return (
        <div className='information__container'>
            <div className='information__wrapper'>
                <h1>Information</h1>
                <p>
                    You must <a href='/login'>LOGIN</a> (/login) before
                    accessing the homepage (/home)
                </p>
                <p>Username: admin</p>
                <p>Password: admin</p>
            </div>
        </div>
    );
};

export default Information;
