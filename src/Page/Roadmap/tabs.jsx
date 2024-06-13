import React, { useState } from 'react';
import Frontend from './frontend';
import Backend from './backend';
import "../../Styles/styleRoadmap.css";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            <div className="tabs flex justify-start flex-wrap gap-[10px] py-[20px]">
                <button
                    onClick={() => handleTabClick(1)}
                    className={`px-[20px] text-[12px] py-[8px] rounded-[50px] ${activeTab === 1 ? 'bg-[#404040] text-white' : 'bg-[#E5E5E5] text-black'}`}
                >
                    Frontend Developer
                </button>

                <button
                    onClick={() => handleTabClick(2)}
                    className={`px-[20px] text-[12px] py-[8px] rounded-[50px] ${activeTab === 2 ? 'bg-[#404040]  text-white' : 'bg-[#E5E5E5] text-black'}`}
                >
                    Backend Developer
                </button>
            </div>

            <div>
                <div className="flex justify-start">
                    <div className="max-w-[700px] w-full">
                        {activeTab === 1 && <Frontend />}
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="max-w-[700px] w-full">
                        {activeTab === 2 && <Backend />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
