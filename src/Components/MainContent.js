import React from 'react';
import code from "../Asset/code.jpeg"
import { FaThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
const MainContent = () => {
    return (
        <div>
            <div className='flex flex-row'>
            <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
            </div>
     <div>
     <p className='ml-3 text-lg font-bold'>Arifur rahman</p>
     <p className='ml-3 text-xs '>MERN Stack Developer || Front-end Developer || Web Developer</p>
     </div>
            </div>

            <div className='mt-5'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='my-5'>
        <img src={code} alt="" />
            </div>
            <div style={{ height: "1px" }} className='bg-gray-300 w-full'></div>
            <div className='flex justify-between'>
            <div className='mt-1'>
            <FaThumbsUp/></div> <p className='ml-2'> Like</p>
            <div className='mt-1'>
            <FaRegCommentDots/></div> <p  className='ml-2'>Comment</p>
            <div className='mt-1'>
            <FaArrowRight/></div>  <p  className='ml-2'>Share</p>
            <div className='mt-1'>
            <FaPaperPlane/></div> <p  className='ml-2'>Send</p>
            </div>
        </div>
    );
};

export default MainContent;