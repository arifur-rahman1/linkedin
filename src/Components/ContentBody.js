import React from 'react';
import MainContent from './MainContent';
import Profile from './Profile';

const ContentBody = () => {
    return (
        <div className='lg:m-5'>
            <div className='flex flex-cols-3 gap-3'>
                {/* first card */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <Profile></Profile>
                    </div>
                   
                </div>
                {/* second card */}
                <div className="card w-5/12 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <MainContent></MainContent>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ContentBody;