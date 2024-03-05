import React from 'react';
import Image from 'next/image';
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className='container pt-6'>
      <div className='flex justify-between items-center'>
        <Image src="/Screenshot 2024-03-02 202051.png"
          width={100} height={100} alt="logo" />
      
        <ul className="md:flex hidden gap-8 items-center front-semibold text-[16px] ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <button className='bg-black text-white px-6 rounded-3xl'>Sigh Up</button>
        
        </ul>

        <IoMenuSharp className='md:hidden text-black' size={30} />
      </div>
    </div>
  );
};

export default Header