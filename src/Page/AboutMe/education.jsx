import React from "react";
import LogoSd from "../../Assets/logo/logo-sd.jpeg";
import LogoSmp from "../../Assets/logo/logo-smp.png";
import LogoSmk from "../../Assets/logo/logo-smk.png";
import { PiGraduationCap } from "react-icons/pi";

const educationData = [
    {
        logo: LogoSd,
        school: "SD Yapissa",
        duration: "2013 - 2019",
        location: "Sukabumi, West Java"
    },
    {
        logo: LogoSmp,
        school: "SMPN 2 Cicurug",
        duration: "2019 - 2022",
        location: "Sukabumi, West Java"
    },
    {
        logo: LogoSmk,
        school: "SMK Wikrama Bogor",
        duration: "2022 - 2022",
        location: "Bogor, West Java"
    }
];

const Education = () => {
    return (
        <div>
            <div className="flex gap-[5px] items-center">
                <PiGraduationCap />
                <p className="text-[20px] font-medium">Education</p>
            </div>
            <p className="text-[16px] text-[#525252]">My school trip until now</p>
            <div className="flex flex-wrap items-center gap-[20px] justify-start mt-[10px]">
                {educationData.map((edu, index) => (
                    <div key={index} className="flex items-center border gap-[10px] flex-wrap py-[30px] px-[20px] rounded-[10px] max-w-[440px] w-full">
                        <img 
                            src={edu.logo}
                            className="w-[70px]"
                        />
                        <div>
                            <p className="font-semibold">{edu.school}</p>
                            <div className="flex flex-wrap gap-[20px] items-center mt-[10px] text-gray-600">
                                <p>{edu.duration}</p>
                                <div className="p-[3px] rounded-[50%] bg-black"></div>
                                <p>{edu.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
