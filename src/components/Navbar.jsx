import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/svg/g8.svg"

function NavBar() {

    const Navigate = useNavigate();
  return (
    <Fragment>
      <div className="bg-[#fcf8f4] flex justify-between items-center font-semibold h-16 px-[8rem]">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Log" className="w-8 cursor-pointer" onClick={()=> Navigate('/')}/>
          <p onClick={()=> Navigate('/')} className=" cursor-pointer">Cognity</p>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li onClick={()=>Navigate('/')} className=" cursor-pointer">Home</li>
            <li onClick={()=>Navigate('/Testpage')} className=" cursor-pointer">Test</li>
            <li onClick={()=>Navigate('/Profile')} className=" cursor-pointer">Profile</li>
            <li onClick={()=>Navigate('/Dashboard')} className=" cursor-pointer">Dashboard</li>
          </ul>
        </div>
        <div>
          <button className="bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-9 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2">Contact Us</button>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;
