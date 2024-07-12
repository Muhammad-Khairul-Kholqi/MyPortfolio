// sidebar
// import React, { useEffect, useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// import "../Styles/styleSidebar.css";
// import BgProfile from "../Assets/bg-sidebar.jpg";
// import MyPhoto from "../Assets/my-photo3.jpg";

// import { MdVerified } from "react-icons/md";
// import { BiHomeSmile } from "react-icons/bi";
// import { LiaBoxSolid } from "react-icons/lia";
// import { IoMdPaperPlane } from "react-icons/io";
// import { TbPencilMinus } from "react-icons/tb";
// import { FaLinkedinIn, FaInstagram} from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import { LuLeaf } from "react-icons/lu";
// import { TbLayoutDashboard } from "react-icons/tb";
// import { LuCoffee } from "react-icons/lu";
// // import { LuSearch } from "react-icons/lu";

// function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(prev => !prev);
//     };

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

        // {
        //     link: "https://saweria.co/khrlkholqi/",
        //     icon: <LuCoffee />,
        //     textTooltip: "Sewaria"
        // },
//     ]

//     const MenuSidebar = [
//         {
//             path: "/",
//             icon: <BiHomeSmile />,
//             textIcon: "Home"
//         },

//         {
//             path: "/aboutme",
//             icon: <LuLeaf />,
//             textIcon: "About"
//         },

//         {
//             path: "/blog",
//             icon: <TbPencilMinus />,
//             textIcon: "Blog"
//         },

//         {
//             path: "/project",
//             icon: <LiaBoxSolid />,
//             textIcon: "Project"
//         },

//         {
//             path: "/dashboard",
//             icon: <TbLayoutDashboard />,
//             textIcon: "Dashboard"
//         },

//         {
//             path: "/contact",
//             icon: <IoMdPaperPlane />,
//             textIcon: "Contact"
//         },
//     ]

//     return (
//         <>
//             <aside className={`sidebar ${isOpen ? "active" : ""} w-[75px] top-0 left-0 bottom-0 fixed bg-white shadow`}>
//                 <div className="open-btn bg-[#F5F5F5] shadow-md rounded-full w-[30px] h-[30px] flex items-center cursor-pointer justify-center ml-[-40px] absolute" onClick={toggleSidebar}>
//                     <IoIosArrowForward className="material-symbols-outlined text-[20px]" />
//                 </div>

//                 <div className="background p-[20px]">
//                     <img 
//                         className="rounded-[10px] h-[90px] w-[250px]"
//                         src={BgProfile}
//                         draggable="false"
//                     />
//                 </div>

//                 <div className="container-photo flex justify-center px-[20px]">
//                     <div className="flex justify-center mt-[-60px] py-[3px] px-[2px] bg-white rounded-full"> 
//                         <img 
//                             className="my-photo max-w-[80px] w-full rounded-full"
//                             src={MyPhoto}
//                             draggable="false"
//                         />
//                     </div>
//                 </div>

//                 <div className="name-username  text-center">
//                     <div className="flex justify-center items-center gap-[5px]">
//                         <p className="full-name text-[20px] font-bold text-[#1F2937] font-sora tracking-tight">Khairul Kholqi</p>
//                         <MdVerified className="icon-fullname text-[#60A5FA]" />
//                     </div>

//                     <div>
//                         <p className="username text-gray-600 text-[13px]">@irull's</p>
//                     </div>
//                 </div>

//                 <div className="sosmed mt-[20px] flex gap-[20px] justify-center flex-wrap">
//                     {LinkSosmed.map((sosmed, index) => (
//                         <div key={index} className="relative">
//                             <a href={sosmed.link} target="blank" className="icon-sosmed peer hover:text-blue-600">
//                                 {sosmed.icon}
//                             </a>
//                             <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">{sosmed.textTooltip}</div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* <div className="px-[20px]">
//                     <div className="container-search flex items-center justify-center mt-[20px] bg-[#F5F5F5] rounded-[10px] py-[5px] px-[10px] border-2 border-[#949494]">
//                         <div>
//                             <LuSearch className="icon-search text-[#949494] text-[20px]" />
//                         </div>
//                         <input 
//                             className="bg-[#F5F5F5] w-full outline-none h-[30px] px-[5px]"
//                             placeholder="Search Project"
//                             type="search" 
//                         />
//                     </div>
//                 </div> */}

//                 <div className="wrapper flex flex-col justify-between px-[20px]">
//                     <nav className="sidebar-nav">
//                         <ul className="nav-menu w-[100%] flex flex-col justify-between">
//                             {MenuSidebar.map((item) => (
//                                 <li key={item.name} className="nav-menu__item">
//                                     <Link to={item.path} className="nav-menu_link flex items-center">
//                                         <span className="material-symbols-outlined icon">{item.icon}</span>
//                                         <span className={`text ${isOpen ? 'visible' : 'hidden'} hover:translate-x-2 duration-500`}>{item.textIcon}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </aside>
//         </>
//     );
// }

// export default Sidebar;


// style sidebar
// :root {
//     --p-inline: 0.75rem;
//     --p-block: 0.5rem;
//     --row-gap: 1rem;
//     --col-gap: 1.5rem;
//     --border-radius: 0.75rem;
// }

// .sidebar {
//     transition: width 0.3s ease-in-out; 
//      overflow-x: auto;
//     -ms-overflow-style: none;  
//     scrollbar-width: none; 
// }

// .sidebar::-webkit-scrollbar {
//     display: none;  
// }

// .sidebar.active {
//     width: 250px; 
// }

// .sidebar .wrapper {
//     transition: transform 0.3s ease-in-out; 
// }

// .sidebar.active .wrapper {
//     transform: translateX(0); 
// }

// .sidebar .background {
//     display: none;
// }

// .sidebar.active .background {
//     display: flex;
// }

// .sidebar .my-photo {
//     width: 50px;
//     margin-top: 100px;
// }

// .sidebar.active .my-photo {
//     width: 90px;
//     margin-top: -1px;
// }

// .sidebar .name-username {
//     display: none;
// }

// .sidebar.active .name-username {
//     display: flex;
//     flex-direction: column;
// }


// .sidebar .sosmed {
//     display: none;
// }

// .sidebar.active .sosmed {
//     display: flex;
//     flex-direction: row;
// }

// .sidebar input {
//     display: none;
// }

// .sidebar.active input {
//     display: flex;
// }

// .open-btn {
//     right: calc(var(--p-inline) * 1);
//     top: var(--p-block);
//     z-index: 99;
//     transition: transform 0.6s ease-in;
// }

// .sidebar.active .open-btn {
//     transform: rotate(180deg);
// }

// .sidebar .nav-menu {
//     row-gap: var(--row-gap);
// }


// .sidebar .nav-menu .nav-menu_link {
//     border-radius: var(--border-radius);
//     column-gap: var(--col-gap);
//     padding-block: var(--p-block);
//     padding-inline: var(--p-inline);
// }

// nav {
//     margin-top: 20px;
// }

// ::placeholder {
//     font-size: 13px;
//     color: #949494;
// }

// @media (max-width: 470px) {
//     .container-photo {
//         padding-left: 40px;
//     }

//     .nav-menu {
//         padding-left: 5px;
//     }

//     .background {
//         margin-left: 18px;
//     }

//     .container-search {
//         margin-left: 14px;
//         padding-left: 10px;
//         border: 1px solid #949494;
//         border-radius: 5px;
//     }

//     .icon-search {
//         font-size: 15px;
//     }
// }


// main 
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
//     <div className="flex justify-center h-screen">
//       {/* sidebar */}
//       <div className="sidebar z-50">
//         <Sidebar />
//       </div>

//       <div className="container-content flex-1 overflow-y-auto p-4 pl-[90px] pr-[20px]">
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