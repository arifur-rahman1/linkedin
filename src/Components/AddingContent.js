import React from 'react';
import { FaPlus } from "react-icons/fa";

const AddingContent = () => {
    return (
        <div>
            <div>
            <p className='ml-3 text-xl font-bold'>Add To Your Feed</p>
            </div>
            {/* Suggested Items */}
            <div className='flex flex-row mt-4'>
            <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG9u0yvVxQU9w/profile-displayphoto-shrink_200_200/0/1658861849970?e=1672272000&v=beta&t=GyvfqUdxR3p71NUyejYYTFRURmgdJz9Re6JjfJsj7B4" />
        </div>
      </label>
            </div>
     <div>
     <p className='ml-3 text-lg font-bold'>Jakir Khan</p>
     <p className='ml-3 text-xs '>MERN Stack Developer || Front-end Developer || Web Developer</p>
     <button className="btn btn-outline mt-5 rounded-full"> <FaPlus/> <p className='ml-2'>Follow</p></button>
     </div>

    
            </div>
            {/* second item */}
            <div className='flex flex-row mt-4'>
            <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQFK6Yce2UQitw/profile-displayphoto-shrink_200_200/0/1615478187449?e=1672272000&v=beta&t=hiItT_DrLiMqNrtfIAHOKh6WIsnJKsfjgmoU8ljFPYQ" />
        </div>
      </label>
            </div>
     <div>
     <p className='ml-3 text-lg font-bold'>Hasim Ali</p>
     <p className='ml-3 text-xs '>MERN Stack Developer || Front-end Developer || Web Developer</p>
     <button className="btn btn-outline mt-5 rounded-full"> <FaPlus/> <p className='ml-2'>Follow</p></button>
     </div>

    
            </div>
            {/* Third Item */}
            <div className='flex flex-row mt-4'>
            <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://media-exp1.licdn.com/dms/image/C5103AQEp8ePu4Np5JA/profile-displayphoto-shrink_200_200/0/1578256185118?e=1672272000&v=beta&t=GcZlD-DQNXtXxqYUZCssot8CU9TtFM-VNk6211bpmpY" />
        </div>
      </label>
            </div>
     <div>
     <p className='ml-3 text-lg font-bold'>Akash Khan</p>
     <p className='ml-3 text-xs '>MERN Stack Developer || Front-end Developer || Web Developer</p>
     <button className="btn btn-outline mt-5 rounded-full"> <FaPlus/> <p className='ml-2'>Follow</p></button>
     </div>

    
            </div>
        </div>
    );
};

export default AddingContent;