import React, { useState } from "react";
import LogoCaasatech from "../../Assets/logo/logo-casatech.png";
import Cv from "../../Assets/KhairulCV.pdf"
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const careerData = [
    {
        logo: LogoCaasatech,
        title: "Frontend Developer",
        company: "PT. Catur Sangkara Teknologi",
        location: "Bogor, West Java",
        duration: "Jan 2024 - Jun 2024",
        period: "6 Month",
        jobDesk: [
            "Design UI with Figma",
            "Create Database with MySQL",
            "Create Admin Page with React. JS"
        ]
    }
];

const JobDeskPopup = ({ jobDesk, onClose }) => (
    <div className="fixed px-[20px] top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-md max-w-lg w-full">
            <div className="flex gap-[10px] flex-wrap justify-between">
                <h2 className="text-xl font-semibold">Job Desk</h2>
                <button onClick={onClose} className="bg-white"><IoClose className="text-[20px]" /></button>
            </div>
            <ul className="list-disc list-inside mt-[20px]">
                {jobDesk.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    </div>
);

const Career = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentJobDesk, setCurrentJobDesk] = useState([]);

    const handleSeeJobDesk = (jobDesk) => {
        setCurrentJobDesk(jobDesk);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div>
                <div className="flex gap-[5px] items-center">
                    <MdWorkOutline />
                    <p className="text-[20px] font-medium">Career</p>
                </div>
                <div className="flex gap-[20px] flex-wrap justify-between items-center">
                    <p className="text-[16px] text-[#525252]">My professional career journey</p>
                    <a href={Cv} download>
                        <div className="flex gap-[5px] items-center">
                            <div className="animate-bounce mt-[5px]">
                                <HiOutlineDownload />
                            </div>
                            <p>Download Resume</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-full mt-[10px]">
                <div className="flex flex-col items-center">
                    {careerData.map((career, index) => (
                        <div key={index} className="pb-[20px] w-full">
                            <div className="flex items-center border gap-[20px] flex-wrap py-[30px] px-[20px] rounded-[10px] w-full">
                                <img 
                                    src={career.logo}
                                    className="w-[80px]"
                                    alt={`${career.company} logo`}
                                />
                                <div>
                                    <p className="text-[18px] font-semibold">{career.title}</p>
                                    <div className="flex flex-wrap gap-[20px] items-center mt-[10px] text-gray-600">
                                        <p>{career.company}</p>
                                        <div className="p-[3px] rounded-[50%] bg-black"></div>
                                        <p>{career.location}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-[20px] items-center mt-[10px] text-gray-600">
                                        <p>{career.duration}</p>
                                        <div className="p-[3px] rounded-[50%] bg-black"></div>
                                        <p>{career.period}</p>
                                    </div>
                                    <div className="mt-[10px]">
                                        <button 
                                            onClick={() => handleSeeJobDesk(career.jobDesk)} 
                                            className="border rounded-[5px] p-[5px] text-[12px] hover:shadow-md duration-300 bg-white"
                                        >
                                            See Jobdesk
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && <JobDeskPopup jobDesk={currentJobDesk} onClose={handleClosePopup} />}
        </div>
    );
};

export default Career;
