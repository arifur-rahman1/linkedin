import React from 'react';
import{FaCalendarAlt}from "react-icons/fa"
import{FaMap}from "react-icons/fa"

const Profile = () => {
    return (
        <div>
            <h2 className='text-lg font-bold'>Recent</h2>
          
           <p className='mt-3'>Email Marketing Conference</p>
        
            <p>Dubai Marketing </p>
            <p>Wordpress</p>
            <p className='mb-8'>fintech</p>
            <h2 className='text-lg font-bold text-sky-500 '>Groups</h2>
            <p className='mt-3'>Dubai Marketing </p>
            <p className='mb-8'>Wordpress</p>
            <h2 className='text-lg font-bold text-sky-500 '>Groups</h2>
            <h2 className='text-lg font-bold text-sky-500 mt-7 '>Followed Hashtags</h2>
            <p className='mt-5'>fintech</p>
            <p className=''>cloud</p>
            <p className=''>seotips</p>

        </div>
    );
};

export default Profile;