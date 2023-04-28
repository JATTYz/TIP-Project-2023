import React from 'react';
import './styles/global.css';

const DropDownProfile = () => {
    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4 text-white flex items-center text-lg'>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    );
};

export default DropDownProfile;

