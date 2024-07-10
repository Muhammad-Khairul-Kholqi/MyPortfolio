import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './Styles/index.css';

import Sidebar from './Template/sidebar';

import Home from './Page/Home/home';
import AboutMe from './Page/AboutMe/aboutMe';
import Dashboard from './Page/Dashboard/dashboard';
import Roadmap from './Page/Roadmap/roadmap';
import Project from './Page/Project/project';
import ProjectDetail from './Page/Project/projectDetail';
import Contact from './Page/Contact/contact';
import Blog from './Page/Blog/blog';
import BlogDetail from './Page/Blog/blogDetail';
// import Music from './Page/Music/music';
import NotFound from './Template/notFound';
// import PageTransition from './Utils/pageVariants';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex justify-center h-screen">
      {/* sidebar */}
      <div className="sidebar z-50">
        <Sidebar />
      </div>

      <div className="container-content flex-1 overflow-y-auto p-4 pl-[90px] pr-[20px]">
        {children}
      </div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/aboutme"
          element={
            <DefaultLayout>
              <AboutMe />
            </DefaultLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          }
        />
         <Route
          path="/roadmap"
          element={
            <DefaultLayout>
              <Roadmap />
            </DefaultLayout>
          }
        />
        <Route
          path="/project"
          element={
            <DefaultLayout>
              <Project />
            </DefaultLayout>
          }
        />
        <Route
          path="/project/:slug" 
          element={
            <ProjectDetail />
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <DefaultLayout>
              <Blog />
            </DefaultLayout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <BlogDetail />
          }
        />
        {/* <Route
          path="/liked-songs"
          element={
            <DefaultLayout>
              <Music />
            </DefaultLayout>
          }
        /> */}

        <Route 
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const Main = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);