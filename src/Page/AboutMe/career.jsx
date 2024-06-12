import React from "react";
import LogoCaasatech from "../../Assets/logo/logo-casatech.png";
import Cv from "../../Assets/KhairulKholqiCv.pdf";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

const careerData = [
    {
        logo: LogoCaasatech,
        title: "Frontend Developer",
        company: "PT. Catur Sangkara Tekhnologi",
        location: "Bogor, West Java",
        duration: "Jan 2024 - Jun 2024",
        period: "6 Month"
    }
    // Anda bisa menambahkan lebih banyak objek di sini
];

const Career = () => {
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Career;
