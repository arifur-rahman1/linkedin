import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaNetworkWired} from "react-icons/fa";
import { FaSuitcase} from "react-icons/fa";
import { FaDiscourse} from "react-icons/fa";
import { FaBell} from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    <div className="form-control invisible lg:visible">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
  </div>
  <div className="flex-none gap-2">
  <ul className="menu menu-horizontal p-0">
      <div className='grid grid-col justify-items-center mr-4'>
      <FaHome/> 
      <p>Home</p>
      </div>
      <div className='grid grid-col justify-items-center mr-4'>
      <FaNetworkWired/> 
      <p>Network</p>
      </div>
      <div className='grid grid-col justify-items-center mr-4'>
      <FaSuitcase/> 
      <p>Jobs</p>
      </div>
      <div className='grid grid-col justify-items-center mr-4'>
      <FaDiscourse/> 
      <p>Messenging</p>
      </div>
      <div className='grid grid-col justify-items-center mr-4'>
      <FaBell/> 
      <p>Notification</p>
      </div>
     
    </ul>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;