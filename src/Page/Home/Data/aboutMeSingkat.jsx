import { useEffect, useRef } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import Typed from 'typed.js';
import { TbCoffee } from "react-icons/tb";
import Cv from "../../../Assets/KhairulCV.pdf";
import "../../../Styles/styleHome.css";
import "../../../Styles/index.css";

const AboutMeSingkat = () => {
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Fullstack Developer", "Specialist Frontend Developer"],
            typeSpeed: 100,
            loop: true
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div>
                <div className="flex gap-[5px] items-center pl-[25px]">
                    <p className="text-[25px] font-sora">Hi, I'm Khairul</p>
                    <p className="shake-animation text-[30px] mt-[-5px]">👋</p>
                </div>
                <div className="flex gap-[10px] items-center pl-[25px] mt-[10px]">
                    <div className="bg-black p-[3px] rounded-[50%]"></div>
                    <p className="text-[13px]">Based in Sukabumi</p>
                </div>

                <div className="flex gap-[10px] items-center flex-wrap pl-[25px] mt-[10px]">
                    <div className="bg-black p-[3px] rounded-[50%]"></div>
                    <span id="skill" ref={el} className="text-[13px]"></span>
                </div>
                <div>
                    <p className="deskripsi-aboutme text-justify mt-[15px] px-[25px] text-[15px] tracking-[0.5px] leading-[30px]">
                        Seasoned Software Engineer especially in Frontend side, with a 
                        passion for creating pixel-perfect web experiences. I work with 
                        JavaScript and specialize in all-things web. I thrive on collaborating 
                        with teams to deliver efficient, scalable, and visually appealing web applications
                    </p>

                    <div className="flex items-center flex-wrap px-[25px] gap-[10px]">
                        <a href={Cv} download>
                            <div className="flex gap-[5px] items-center mt-[10px]">
                                <div className="animate-bounce mt-[5px]">
                                    <HiOutlineDownload />
                                </div>
                                <p className="text-[12px]">Download CV</p>
                            </div>
                        </a>

                        <div className="relative mt-[10px] cursor-default">
                            <div className="peer flex items-center gap-[5px] border py-1 px-3 rounded-full">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <p className="text-[12px]">Hire me.</p>
                            </div>
                            <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">Remote worker</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSingkat;
