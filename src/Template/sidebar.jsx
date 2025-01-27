import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Styles/styleSidebar.css";
import BgProfile from "../Assets/bg-sidebar.jpg";
import MyPhoto from "../Assets/my-photo3.jpg";

import { MdVerified } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { LiaBoxSolid } from "react-icons/lia";
import { IoMdPaperPlane } from "react-icons/io";
import { TbPencilMinus } from "react-icons/tb";
import { LuCoffee } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { HiOutlineX } from 'react-icons/hi';


const Sidebar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const LinkSosmed = [
        {
            link: "https://www.linkedin.com/in/muhammad-khairul-kholqi-9b9413326/",
            icon: <FaLinkedinIn />,
            textTooltip: "Linkedin"
        },

        {
            link: "https://www.instagram.com/khayrl__/",
            icon: <FaInstagram />,
            textTooltip: "Instagram"
        },

        {
            link: "https://github.com/Muhammad-Khairul-Kholqi/",
            icon: <FiGithub />,
            textTooltip: "Github"
        },

        {
            link: "https://saweria.co/khrlkholqi/",
            icon: <LuCoffee />,
            textTooltip: "Sewaria"
        },
    ]

    const MenuSidebar = [
        {
            path: "/",
            icon: <BiHomeSmile />,
            textIcon: "Home",
            tooltip: "Home"
        },

        {
            path: "/aboutme",
            icon: <LuLeaf />,
            textIcon: "About",
            tooltip: "About"
        },

        {
            path: "/blog",
            icon: <TbPencilMinus />,
            textIcon: "Blog",
            tooltip: "Blog"
        },

        {
            path: "/project",
            icon: <LiaBoxSolid />,
            textIcon: "Project",
            tooltip: "Project"
        },

        {
            path: "/dashboard",
            icon: <TbLayoutDashboard />,
            textIcon: "Dashboard",
            tooltip: "Dashboard"
        },

        {
            path: "/contact",
            icon: <IoMdPaperPlane />,
            textIcon: "Contact",
            tooltip: "Contact"
        },
    ]

    return (
        <>
            <div className="container-sidebar p-[20px] w-[270px] h-screen">
                <div
                    className="my-photo pt-[90px] rounded-[10px] relative"
                    style={{
                        backgroundImage: `url(${BgProfile})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <img 
                        className="w-[90px] bg-white shadow-md p-[2px] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-[50%] hover:scale-105 duration-500"
                        src={MyPhoto}
                        draggable="false"
                    />
                </div>

                <div className="name-username mt-[60px] text-center">
                    <div className="flex justify-center items-center gap-[5px]">
                        <p className="full-name text-[20px] font-bold text-[#1F2937] font-sora tracking-tight">Khairul Kholqi</p>
                        <MdVerified className="icon-fullname text-[#60A5FA]" />
                    </div>

                    <div>
                        <p className="username text-gray-600 text-[13px]">@irulsss</p>
                    </div>
                </div>

                <div className="sosmed mt-[20px] flex gap-[20px] justify-center flex-wrap">
                    {LinkSosmed.map((sosmed, index) => (
                        <div key={index} className="relative">
                            <a href={sosmed.link} target="blank" className="icon-sosmed peer hover:text-blue-600">
                                {sosmed.icon}
                            </a>
                            <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">{sosmed.textTooltip}</div>
                        </div>
                    ))}
                </div>

                <div className="menu-sidebar flex flex-col items-start mt-[20px]">
                    {MenuSidebar.map((menu, index) => (
                        <Link key={index} to={menu.path} className="w-full mt-[10px]">
                            <div className={`group flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === `${menu.path}` ? 'bg-[#F5F5F5] text-black' : ''}`}>
                                <div className="icon-menu text-[18px] group-hover:rotate-12 duration-500">
                                    {menu.icon}
                                </div>
                                <p className="text-menu text-[15px] group-hover:translate-x-2 duration-500">
                                    {menu.textIcon}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* responsive navbar ukuran 700px */}
            <nav className="container-navbar bg-white shadow-md fixed w-full z-10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex justify-center flex-wrap gap-[10px]">
                        <img 
                            className="w-[40px] bg-white shadow-md p-[2px] rounded-[50%] hover:scale-105 duration-500"
                            src={MyPhoto}
                            draggable="false"
                        />
                        <div className="flex justify-center items-center gap-[5px]">
                            <p className="full-name font-bold text-[#1F2937] tracking-tight">Khairul Kholqi</p>
                            <MdVerified className="icon-fullname text-[#60A5FA]" />
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none bg-white">
                        {isOpen ? ( 
                            <HiOutlineX className="text-3xl" />
                        ) : (
                            <HiOutlineBars3BottomRight className="text-3xl" />
                        )}
                    </button>
                </div>

                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-4'} px-[20px] duration-300 absolute left-0 top-16 w-full bg-white shadow-lg`}>
                    <div className="sosmed mt-[20px] flex flex-wrap gap-[20px] justify-between px-[20px]">
                        {LinkSosmed.map((sosmed, index) => (
                            <div key={index} className="relative">
                                <a href={sosmed.link} target="blank" className="icon-sosmed peer hover:text-blue-600">
                                    {sosmed.icon}
                                </a>
                                <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">{sosmed.textTooltip}</div>
                            </div>
                        ))}
                    </div>
                    <ul className="flex flex-col md:flex-row md:space-x-6 md:py-0 py-4">
                        {MenuSidebar.map(({ path, icon, textIcon }) => (
                            <li key={textIcon} className="transition-transform transform-gpu hover:translate-y-1">
                                <Link to={path} className={`group flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === path ? 'bg-[#F5F5F5] text-black' : ''}`}>
                                    <div className="icon-menu text-[18px] group-hover:rotate-12 duration-500">
                                        {icon}
                                    </div>
                                    <span className="text-menu text-[15px] group-hover:translate-x-2 duration-500">
                                        {textIcon}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;