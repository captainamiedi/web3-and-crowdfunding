import React from 'react'
import logo from '../../images/logo.png'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='w-full flex md:justify-center  pt-3'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {NavData.map((item, index) => (
          <NavBarItem routeLink={item.route} key={item + index} title={item.name} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {NavData.map(
              (item, index) => <NavBarItem routeLink={item.route} key={item + index} title={item.name} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

const NavBarItem = ({ title, classprops, routeLink }) => (
  <Link to={routeLink} className={`mx-4 cursor-pointer ${classprops}`}>{title}</Link>
);

const NavData = [
  {
    name: 'Market',
    route: '/'
  },
  {
    name: 'Exchange',
    route: '/exchange'
  },
  {
    name: 'CrowdFunding',
    route: '/crowdfunding'
  },
]