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

const Sidebar = () => {
    const location = useLocation();

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
                        <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === `${menu.path}` ? 'bg-[#F5F5F5] text-black' : ''}`}>
                            <div  className="icon-menu text-[18px]">
                                {menu.icon}
                            </div>
                            <p className="text-menu text-[15px] hover:translate-x-2 duration-500">{menu.textIcon}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* <Link to="/liked-songs">
                <div className="button-unduh flex justify-center mt-[20px] border py-[8px] rounded-[10px] hover:scale-105 duration-500">
                    <button className="flex items-center gap-[8px] bg-white">
                        <FaSpotify className="text-[#25D865] text-[20px]" />
                        <p className="text-unduh">Liked Songs</p>
                    </button>
                </div>
            </Link> */}
        </div>
    );
}

export default Sidebar;