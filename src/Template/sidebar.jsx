import { Link, useLocation } from 'react-router-dom';
import "../Styles/styleSidebar.css";
import BgProfile from "../Assets/bg-sidebar.jpg";
import MyPhoto from "../Assets/my-photo3.jpg";

import { MdVerified } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { LiaBoxSolid } from "react-icons/lia";
import { IoMdPaperPlane } from "react-icons/io";
import { TbPencilMinus } from "react-icons/tb";
import { TbRouteSquare } from "react-icons/tb";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaSpotify } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { TbLayoutDashboard } from "react-icons/tb";

const Sidebar = () => {
    const location = useLocation();

    return (
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
                    <p className="username text-gray-600 text-[13px]">@irull's</p>
                </div>
            </div>

            <div className="sosmed flex flex-wrap gap-[15px] justify-center mt-[10px]">
                <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/" target="blank">
                    <div className="hover:text-blue-600 icon-sosmed">
                        <FaLinkedinIn />
                    </div>
                </a>

                <a href="https://www.instagram.com/kkyhrl/" target="blank">
                    <div className="hover:text-blue-600 icon-sosmed">
                        <FaInstagram />
                    </div>
                </a>

                <a href="https://github.com/Muhammad-Khairul-Kholqi" target="blank">
                    <div className="hover:text-blue-600 icon-sosmed">
                        <FiGithub />
                    </div>
                </a>

                <a href="https://wa.me/0895329761084" target="blank">
                    <div className="hover:text-blue-600 icon-sosmed">
                        <FaWhatsapp />
                    </div>
                </a>
            </div>

            <hr className="hr-responsive mt-[20px]" />

            <div className="menu-sidebar flex flex-col items-start mt-[20px]">
                <Link to="/" className="w-full">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <BiHomeSmile className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">Home</p>
                    </div>
                </Link>

                <Link to="/aboutme" className="w-full mt-[10px]">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/aboutme' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <LuLeaf className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">About</p>
                    </div>
                </Link>

                <Link to="/blog" className="w-full mt-[10px]">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/blog' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <TbPencilMinus className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">Blog</p>
                    </div>
                </Link>

                <Link to="/project" className="w-full mt-[10px]">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/project' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <LiaBoxSolid className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">Project</p>
                    </div>
                </Link>


                <Link to="/dashboard" className="w-full mt-[10px]">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/dashboard' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <TbLayoutDashboard className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">Dashboard</p>
                    </div>
                </Link>

                <Link to="/roadmap" className="w-full mt-[10px]">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/roadmap' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <TbRouteSquare className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">Roadmap</p>
                    </div>
                </Link>

                <Link to="/contact" className="w-full mt-[10px]">
                    <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === '/contact' ? 'bg-[#F5F5F5] text-black' : ''}`}>
                        <IoMdPaperPlane className="icon-menu text-[18px]" />
                        <p className="text-menu text-[15px] hover:translate-x-2 duration-500">Contact</p>
                    </div>
                </Link>
            </div>

            <Link to="/liked-songs">
                <div className="button-unduh flex justify-center mt-[20px] border py-[8px] rounded-[10px] hover:scale-105 duration-500">
                    <button className="flex items-center gap-[8px] bg-white">
                        <FaSpotify className="text-[#25D865] text-[20px]" />
                        <p className="text-unduh">Liked Songs</p>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;
