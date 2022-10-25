import React from 'react';
import AddingContent from './AddingContent';
import MainContent from './MainContent';
import Profile from './Profile';

const ContentBody = () => {
    return (
        <div className=' lg:m-5 '>
            <div className=' flex flex-rows-3 lg:flex-cols-3 justify-center gap-4'>
            {/* first card */}
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <Profile></Profile>
                    </div>

                </div>
            </div>
            {/* second card */}
            <div className="card w-6/12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <MainContent></MainContent>
                </div>

            </div>
            {/* Third card */}
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <AddingContent></AddingContent>
                    </div>

                </div>
            </div>
        </div> 
        
        </div >
    );
};

export default ContentBody;


