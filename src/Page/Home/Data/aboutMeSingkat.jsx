import { useEffect, useRef } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { TbCoffee } from "react-icons/tb";
import Typed from 'typed.js';
import Cv from "../../../Assets/KhairulKholqiCv.pdf";
import "../../../Styles/styleHome.css";
import "../../../Styles/index.css";

const AboutMeSingkat = () => {
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Frontend Developer", "Web Developer"],
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
                <div className="flex justify-between items-center gap-[20px]">
                    <div className="flex gap-[5px] items-center">
                        <p className="text-[25px] font-sora">Hi, I'm Khairul</p>
                        <p className="shake-animation text-[30px] mt-[-5px]">👋</p>
                    </div>
                    <div>
                        <a href="">
                            <TbCoffee className="text-[25px]" />
                        </a>
                    </div>
                </div>
                <div className="flex gap-[10px] items-center flex-wrap text-[15px] font-medium">
                    <div className="flex gap-[10px] items-center px-[25px] mt-[10px]">
                        <div className="bg-black p-[3px] rounded-[50%]"></div>
                        <p>Based in West Java</p>
                    </div>
                    <div className="flex gap-[10px] items-center flex-wrap px-[25px] mt-[10px]">
                        <div className="bg-black p-[3px] rounded-[50%]"></div>
                        <span id="skill" ref={el}></span>
                    </div>
                </div>
                <div>
                    <p className="deskripsi-aboutme mt-[15px] px-[25px] text-[15px] tracking-[0.5px] leading-[35px]">
                        Seasoned Software Engineer especially in Frontend side, with a 
                        passion for creating pixel-perfect web experiences. I work with 
                        JavaScript and specialize in all-things web. I thrive on collaborating 
                        with teams to deliver efficient, scalable, and visually appealing web applications
                    </p>

                    <a href={Cv} download>
                        <div className="flex gap-[5px] items-center px-[25px] mt-[10px]">
                            <div className="animate-bounce mt-[5px]">
                                <HiOutlineDownload />
                            </div>
                            <p className="font-bold">Download CV</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSingkat;
