import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer className='w-full h-[40px] flex justify-between items-center px-4 bg-[#fff] text-[#333] font-semibold'>
      <h4 className=' text-xl sm:text-xl'>Developed by Mahesh Gaikwad</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href='' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer