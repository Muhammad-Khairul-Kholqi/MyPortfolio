import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../Styles/styleSidebar.css";
import BgProfile from "../Assets/bg-sidebar.jpg";
import MyPhoto from "../Assets/my-photo3.jpg";

import { MdVerified } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { LiaBoxSolid } from "react-icons/lia";
import { IoMdPaperPlane } from "react-icons/io";
import { TbPencilMinus } from "react-icons/tb";
import { FaLinkedinIn, FaInstagram} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };

    const LinkSosmed = [
        {
            link: "https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/",
            icon: <FaLinkedinIn />,
            textTooltip: "Linkedin"
        },

        {
            link: "https://www.instagram.com/kkyhrl/",
            icon: <FaInstagram />,
            textTooltip: "Instagram"
        },

        {
            link: "https://github.com/Muhammad-Khairul-Kholqi/",
            icon: <FiGithub />,
            textTooltip: "Github"
        },
    ]

    const MenuSidebar = [
        {
            path: "/",
            icon: <BiHomeSmile />,
            textIcon: "Home"
        },

        {
            path: "/aboutme",
            icon: <LuLeaf />,
            textIcon: "About"
        },

        {
            path: "/blog",
            icon: <TbPencilMinus />,
            textIcon: "Blog"
        },

        {
            path: "/project",
            icon: <LiaBoxSolid />,
            textIcon: "Project"
        },

        {
            path: "/dashboard",
            icon: <TbLayoutDashboard />,
            textIcon: "Dashboard"
        },

        {
            path: "/contact",
            icon: <IoMdPaperPlane />,
            textIcon: "Contact"
        },
    ]

    return (
        <aside className={`sidebar ${isOpen ? "active" : ""} w-[75px] top-0 left-0 bottom-0 fixed bg-white shadow`}>
            <div className="open-btn bg-[#F5F5F5] shadow-md rounded-full w-[30px] h-[30px] flex items-center cursor-pointer justify-center ml-[-40px] absolute" onClick={toggleSidebar}>
                <IoIosArrowForward className="material-symbols-outlined text-[20px]" />
            </div>

            <div className="background p-[20px]">
                <img 
                    className="rounded-[10px] h-[90px] w-[250px]"
                    src={BgProfile}
                    draggable="false"
                />
            </div>

            <div className="container-photo flex justify-center px-[20px]">
                <div className="flex justify-center mt-[-60px] py-[3px] px-[2px] bg-white rounded-full"> 
                    <img 
                        className="my-photo max-w-[80px] w-full rounded-full"
                        src={MyPhoto}
                        draggable="false"
                    />
                </div>
            </div>

            <div className="name-username  text-center">
                <div className="flex justify-center items-center gap-[5px]">
                    <p className="full-name text-[20px] font-bold text-[#1F2937] font-sora tracking-tight">Khairul Kholqi</p>
                    <MdVerified className="icon-fullname text-[#60A5FA]" />
                </div>

                <div>
                    <p className="username text-gray-600 text-[13px]">@irull's</p>
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

            <div className="px-[20px]">
                <div className="container-search flex items-center justify-center mt-[20px] bg-[#F5F5F5] rounded-[10px] py-[5px] px-[10px] border-2 border-[#949494]">
                    <div>
                        <LuSearch className="icon-search text-[#949494] text-[20px]" />
                    </div>
                    <input 
                        className="bg-[#F5F5F5] w-full outline-none h-[30px] px-[5px]"
                        placeholder="Search Project"
                        type="search" 
                    />
                </div>
            </div>

            <div className="wrapper flex flex-col justify-between px-[20px]">
                <nav className="sidebar-nav">
                    <ul className="nav-menu w-[100%] flex flex-col justify-between">
                        {MenuSidebar.map((item) => (
                            <li key={item.name} className="nav-menu__item">
                                <Link to={item.path} className="nav-menu_link flex items-center">
                                    <span className="material-symbols-outlined icon">{item.icon}</span>
                                    <span className={`text ${isOpen ? 'visible' : 'hidden'} hover:translate-x-2 duration-500`}>{item.textIcon}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
