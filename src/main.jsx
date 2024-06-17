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
import Music from './Page/Music/music';
// import PageTransition from './Utils/pageVariants';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex justify-center px-[5%] h-screen">
      {/* sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="container-content flex-1 overflow-y-auto p-4">
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
              {/* <PageTransition> */}
                <Home />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
        <Route
          path="/aboutme"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <AboutMe />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <Dashboard />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
         <Route
          path="/roadmap"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <Roadmap />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
        <Route
          path="/project"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <Project />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
        <Route
          path="/project/:id"
          element={
            <ProjectDetail />
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <Contact />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <Blog />
              {/* </PageTransition> */}
            </DefaultLayout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetail />
          }
        />
        <Route
          path="/liked-songs"
          element={
            <DefaultLayout>
              {/* <PageTransition> */}
                <Music />
              {/* </PageTransition> */}
            </DefaultLayout>
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