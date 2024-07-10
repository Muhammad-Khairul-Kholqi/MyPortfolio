// INI ADALAH SIDEBAR SEBELUM YANG BARU

// CODE REACT JS
// import { Link, useLocation } from 'react-router-dom';
// import "../Styles/styleSidebar.css";
// import BgProfile from "../Assets/bg-sidebar.jpg";
// import MyPhoto from "../Assets/my-photo3.jpg";

// import { MdVerified } from "react-icons/md";
// import { BiHomeSmile } from "react-icons/bi";
// import { LiaBoxSolid } from "react-icons/lia";
// import { IoMdPaperPlane } from "react-icons/io";
// import { TbPencilMinus } from "react-icons/tb";
// import { TbRouteSquare } from "react-icons/tb";
// import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaSpotify } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import { LuLeaf } from "react-icons/lu";
// import { TbLayoutDashboard } from "react-icons/tb";

// const Sidebar = () => {
//     const location = useLocation();

//     const LinkSosmed = [
//         {
//             link: "https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/",
//             icon: <FaLinkedinIn />,
//             textTooltip: "Linkedin"
//         },

//         {
//             link: "https://www.instagram.com/kkyhrl/",
//             icon: <FaInstagram />,
//             textTooltip: "Instagram"
//         },

//         {
//             link: "https://github.com/Muhammad-Khairul-Kholqi/",
//             icon: <FiGithub />,
//             textTooltip: "Github"
//         },
//     ]

//     const MenuSidebar = [
//         {
//             path: "/",
//             icon: <BiHomeSmile />,
//             textIcon: "Home",
//             tooltip: "Home"
//         },

//         {
//             path: "/aboutme",
//             icon: <LuLeaf />,
//             textIcon: "About",
//             tooltip: "About"
//         },

//         {
//             path: "/blog",
//             icon: <TbPencilMinus />,
//             textIcon: "Blog",
//             tooltip: "Blog"
//         },

//         {
//             path: "/project",
//             icon: <LiaBoxSolid />,
//             textIcon: "Project",
//             tooltip: "Project"
//         },

//         {
//             path: "/dashboard",
//             icon: <TbLayoutDashboard />,
//             textIcon: "Dashboard",
//             tooltip: "Dashboard"
//         },

//         {
//             path: "/contact",
//             icon: <IoMdPaperPlane />,
//             textIcon: "Contact",
//             tooltip: "Contact"
//         },
//     ]

//     return (
//         <div className="container-sidebar p-[20px] w-[270px] h-screen">
//             <div
//                 className="my-photo pt-[90px] rounded-[10px] relative"
//                 style={{
//                     backgroundImage: `url(${BgProfile})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <img 
//                     className="w-[90px] bg-white shadow-md p-[2px] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-[50%] hover:scale-105 duration-500"
//                     src={MyPhoto}
//                     draggable="false"
//                 />
//             </div>

//             <div className="name-username mt-[60px] text-center">
//                 <div className="flex justify-center items-center gap-[5px]">
//                     <p className="full-name text-[20px] font-bold text-[#1F2937] font-sora tracking-tight">Khairul Kholqi</p>
//                     <MdVerified className="icon-fullname text-[#60A5FA]" />
//                 </div>

//                 <div>
//                     <p className="username text-gray-600 text-[13px]">@irull's</p>
//                 </div>
//             </div>

//             <div className="sosmed mt-[20px] flex gap-[20px] justify-center flex-wrap">
//                 {LinkSosmed.map((sosmed, index) => (
//                     <div key={index} className="relative">
//                         <a href={sosmed.link} target="blank" className="icon-sosmed peer hover:text-blue-600">
//                             {sosmed.icon}
//                         </a>
//                         <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">{sosmed.textTooltip}</div>
//                     </div>
//                 ))}
//             </div>

//             <div className="menu-sidebar flex flex-col items-start mt-[20px]">
//                 {MenuSidebar.map((menu, index) => (
//                     <Link key={index} to={menu.path} className="w-full mt-[10px]">
//                         <div className={`flex items-center gap-5 hover:bg-[#F5F5F5] duration-500 py-2 px-3 rounded-[5px] ${location.pathname === `${menu.path}` ? 'bg-[#F5F5F5] text-black' : ''}`}>
//                             <div  className="icon-menu text-[18px]">
//                                 {menu.icon}
//                             </div>
//                             <p className="text-menu text-[15px] hover:translate-x-2 duration-500">{menu.textIcon}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>

//             {/* <Link to="/liked-songs">
//                 <div className="button-unduh flex justify-center mt-[20px] border py-[8px] rounded-[10px] hover:scale-105 duration-500">
//                     <button className="flex items-center gap-[8px] bg-white">
//                         <FaSpotify className="text-[#25D865] text-[20px]" />
//                         <p className="text-unduh">Liked Songs</p>
//                     </button>
//                 </div>
//             </Link> */}
//         </div>
//     );
// }

// export default Sidebar;



// code css
// .container-sidebar {
//     overflow-x: auto;
//     -ms-overflow-style: none;  
//     scrollbar-width: none; 
// }

// .container-sidebar::-webkit-scrollbar {
//     display: none;  
// }


// @media (max-width: 700px) {
//     .container-sidebar {
//         width: 200px;
//     }

//     .my-photo img {
//         width: 80px;
//     }

// }

// @media (max-width: 700px) {
//     .container-sidebar {
//         width: 150px;
//     }

//     .my-photo img {
//         width: 70px;
//     }

//     .full-name {
//         font-size: 12px;
//     }

//     .icon-fullname {
//         font-size: 15px;
//     }

//     .text-unduh {
//         font-size: 11px;
//     }

//     .text-menu {
//         font-size: 10px;
//     }

//     .icon-menu {
//         font-size: 15px;
//     }
// }

// @media (max-width: 470px) {
//     .container-sidebar {
//         width: 50px;
//     }

//     .my-photo {
//         background-image: none !important;
//     }

//     .my-photo img {
//         display: none;
//     }

//     .name-username {
//         display: none;
//     }

//     .sosmed {
//         display: none;
//     }

//     .text-menu,
//     .text-unduh {
//         display: none;
//     }

//     .hr-responsive {
//         display: none;
//     }

//     .menu-sidebar {
//         display: flex;
//         justify-content: center;
//         flex-direction: column; 
//         align-items: center; 
//         margin-top: -100px;
//     }

//     .dark-mode {
//         margin-top: -100px;
//     }

//     .menu-sidebar > a {
//         width: auto;
//         margin-top: 10px;
//     }

//     .menu-sidebar > a > div {
//         flex-direction: column; 
//         align-items: center;
//         padding: 10px; 
//     }

//     .menu-sidebar > a > div > p {
//         display: none; 
//     }

//     .button-unduh {
//         border: none;
//     }
// }



// code main
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import './Styles/index.css';

// import Sidebar from './Template/sidebar';

// import Home from './Page/Home/home';
// import AboutMe from './Page/AboutMe/aboutMe';
// import Dashboard from './Page/Dashboard/dashboard';
// import Roadmap from './Page/Roadmap/roadmap';
// import Project from './Page/Project/project';
// import ProjectDetail from './Page/Project/projectDetail';
// import Contact from './Page/Contact/contact';
// import Blog from './Page/Blog/blog';
// import BlogDetail from './Page/Blog/blogDetail';
// // import Music from './Page/Music/music';
// import NotFound from './Template/notFound';
// // import PageTransition from './Utils/pageVariants';

// const DefaultLayout = ({ children }) => {
//   return (
//     <div className="flex justify-center px-[5%] h-screen">
//       {/* sidebar */}
//       <div className="sidebar">
//         <Sidebar />
//       </div>

//       <div className="container-content flex-1 overflow-y-auto p-4">
//         {children}
//       </div>
//     </div>
//   );
// };

// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <DefaultLayout>
//               <Home />
//             </DefaultLayout>
//           }
//         />
//         <Route
//           path="/aboutme"
//           element={
//             <DefaultLayout>
//               <AboutMe />
//             </DefaultLayout>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <DefaultLayout>
//               <Dashboard />
//             </DefaultLayout>
//           }
//         />
//          <Route
//           path="/roadmap"
//           element={
//             <DefaultLayout>
//               <Roadmap />
//             </DefaultLayout>
//           }
//         />
//         <Route
//           path="/project"
//           element={
//             <DefaultLayout>
//               <Project />
//             </DefaultLayout>
//           }
//         />
//         <Route
//           path="/project/:slug" 
//           element={
//             <ProjectDetail />
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <DefaultLayout>
//               <Contact />
//             </DefaultLayout>
//           }
//         />
//         <Route
//           path="/blog"
//           element={
//             <DefaultLayout>
//               <Blog />
//             </DefaultLayout>
//           }
//         />
//         <Route
//           path="/blog/:slug"
//           element={
//             <BlogDetail />
//           }
//         />
//         {/* <Route
//           path="/liked-songs"
//           element={
//             <DefaultLayout>
//               <Music />
//             </DefaultLayout>
//           }
//         /> */}

//         <Route 
//           path="*"
//           element={
//             <NotFound />
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// const Main = () => {
//   return (
//     <Router>
//       <AnimatedRoutes />
//     </Router>
//   );
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>,
//   document.getElementById('root')
// );