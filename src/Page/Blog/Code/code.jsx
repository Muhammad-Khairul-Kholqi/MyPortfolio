import React, { useState, useEffect } from 'react';
import "../../../Styles/styleBlog.css"
import Html from "./html";
import Css from "./css";
import JavaScript from "./js";
import ImgSementara from "../../../Assets/project/school.png";
import Footer from '../../../Template/footer';

const Code = () => {
    // AOS.init();

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return(
        <div>
            <div className="mt-[20px] mb-[30px] px-[10px] ">
                <div className="flex justify-center">
                    <h1 className="title-code font-bold text-[25px] text-start w-[900px]">Creating a Login Page UI using ReactJS and Tailwind CSS</h1>
                </div>

                <div className="flex justify-center mt-[20px]">
                    <p className="deskripsi-code text-start w-[900px]">In this article, we will create a functional, responsive navigation bar using React JS and tailwind CSS. In this, we are using NextJS and Typescript instead of JavaScript and Tailwind CSS for UI.</p>  
                </div>

                <div className="flex justify-center mt-[30px]">
                    <img className="w-[900px]" src={ImgSementara} />
                </div>

                <div className = "flex justify-center mt-[20px]" >
                    <p className="text-start w-[900px] text-[25px] font-bold">Code:</p>
                </div>
                
                <div className="tabs flex justify-center flex-wrap gap-[25px] py-[20px]">
                    <button onClick={() => handleTabClick(1)} className="{activeTab === 1 ? 'active' : ''} px-[10px] py-[5px] border border-gray-500 text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                    HTML
                    </button>
                    <button onClick={() => handleTabClick(2)} className="{activeTab === 2 ? 'active' : ''} px-[10px] py-[5px] border border-gray-500 text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                    CSS
                    </button>
                    <button onClick={() => handleTabClick(3)} className="{activeTab === 3 ? 'active' : ''} px-[10px] py-[5px] border border-gray-500 text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                    JavaScript
                    </button>
                </div>

                <div className="mb-[30px]">
                    <div className = "flex justify-center" >
                        <p className = "max-w-[900px] w-full" >
                            {activeTab === 1 && <Html />}
                        </p>
                    </div>

                    <div className = "flex justify-center" >
                        <p className = "max-w-[900px] w-full" >
                            {activeTab === 2 && <Css />}
                        </p>
                    </div>

                    <div className = "flex justify-center" >
                        <p className = "max-w-[900px] w-full" >
                            {activeTab === 3 && <JavaScript />}
                        </p>
                    </div>
                </div>

                <div>
                    <div className = "flex justify-center" >
                        <p className="text-start w-[900px] text-[25px] font-bold">Output:</p>
                    </div>
                    {/* <div className = "flex justify-center mt-[30px]" >
                        <video width="700" height="400" controls>
                            <source src={VidSementara} type="video/mp4" />
                        </video>
                    </div> */}
                </div>

                <div className="mt-[100px]">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Code;