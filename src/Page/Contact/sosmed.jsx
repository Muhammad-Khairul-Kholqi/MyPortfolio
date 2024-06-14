import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Sosmed = () => {
    return (
        <div>
            <div>
                <p className="text-[16px]">Find Me</p>

                <div className="flex justify-start items-center flex-wrap gap-[20px] mt-[20px]">
                    <div className="flex flex-wrap items-center justify-center gap-[20px] p-[25px] border border-blue-600 rounded-[10px]">
                        <div>
                            <p className="text-blue-600 font-bold text-[20px]">Let`s connect</p>
                            <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/" target="blank">
                               <div className="flex items-center justify-center gap-[5px] mt-[10px] text-white bg-blue-600 hover:bg-blue-700 py-[7px] px-[10px] rounded-[10px]">
                                    <p className="text-[14px]">Go to Linkedin</p>
                                    <MdOutlineArrowOutward />
                               </div>
                            </a>
                        </div>
                        <div className="bg-blue-600 p-[15px] rounded-[100%]">
                            <FaLinkedin className="text-[30px] text-white" />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-[20px] p-[25px] border border-slate-600 rounded-[10px]">
                        <div>
                            <p className="text-[#1E293B] font-bold text-[20px]">Explore the code</p>
                            <a href="https://github.com/Muhammad-Khairul-Kholqi" target="blank">
                               <div className="flex items-center justify-center gap-[5px] mt-[10px] text-white bg-[#1E293B] hover:bg-slate-700 py-[7px] px-[10px] rounded-[10px]">
                                    <p className="text-[14px]">Go to Github</p>
                                    <MdOutlineArrowOutward />
                               </div>
                            </a>
                        </div>
                        <div className="bg-[#1E293B] p-[15px] rounded-[100%]">
                            <IoLogoGithub className="text-[30px] text-white" />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-[20px] p-[25px] border border-purple-600 rounded-[10px]">
                        <div>
                            <p className="text-purple-600 font-bold text-[20px]">Chat with me</p>
                            <a href="https://discord.com/channels/@kkyhrl" target="blank">
                               <div className="flex items-center justify-center gap-[5px] mt-[10px] text-white bg-purple-600 hover:bg-purple-700 py-[7px] px-[10px] rounded-[10px]">
                                    <p className="text-[14px]">Go to Discord</p>
                                    <MdOutlineArrowOutward />
                               </div>
                            </a>
                        </div>
                        <div className="bg-purple-600 p-[15px] rounded-[100%]">
                            <FaDiscord className="text-[30px] text-white" />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-[20px] p-[25px] border border-red-600 rounded-[10px]">
                        <div>
                            <p className="text-red-600 font-bold text-[20px]">Follow Me</p>
                             <a href="https://www.instagram.com/kkyhrl/" target="blank">
                               <div className="flex items-center justify-center gap-[5px] mt-[10px] text-white bg-red-600 hover:bg-red-700 py-[7px] px-[10px] rounded-[10px]">
                                    <p className="text-[14px]">Go to Instagram</p>
                                    <MdOutlineArrowOutward />
                               </div>
                            </a>
                        </div>
                        <div className="bg-red-600 p-[15px] rounded-[100%]">
                            <FaInstagram className="text-[30px] text-white" />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-[20px] p-[25px] border border-green-600 rounded-[10px]">
                        <div>
                            <p className="text-green-600 font-bold text-[20px]">Chat with me</p>
                            <a href="https://wa.me/0895329761084" target="blank">
                               <div className="flex items-center justify-center gap-[5px] mt-[10px] text-white bg-green-600 hover:bg-green-700 py-[7px] px-[10px] rounded-[10px]">
                                    <p className="text-[14px]">Go to WhatsApp</p>
                                    <MdOutlineArrowOutward />
                               </div>
                            </a>
                        </div>
                        <div className="bg-green-600 p-[15px] rounded-[100%]">
                            <FaWhatsapp className="text-[30px] text-white" />
                        </div>
                    </div>
                </div>

                {/* <div className="flex justify-start items-center flex-wrap gap-[20px] mt-[20px]">
                    <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[160px] text-center justify-center hover:scale-105 duration-500 bg-[#3B82F6] text-white rounded-[5px]">
                            <FaLinkedinIn className="text-[20px]" />
                            <p className="text-[18px]">Linkedin</p>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/kkyhrl/" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[160px] text-center justify-center hover:scale-105 duration-500 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 text-white rounded-[5px]">
                            <FaInstagram className="text-[20px]" />
                            <p className="text-[18px]">Instagram</p>
                        </div>
                    </a>

                    <a href="https://github.com/Muhammad-Khairul-Kholqi" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[160px] text-center justify-center hover:scale-105 duration-500 bg-black text-white rounded-[5px]">
                            <FiGithub className="text-[20px]" />
                            <p className="text-[18px]">Github</p>
                        </div>
                    </a>

                    <a href="https://wa.me/0895329761084" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[160px] text-center justify-center hover:scale-105 duration-500 bg-green-600 text-white rounded-[5px]">
                            <FaWhatsapp className="text-[20px]" />
                            <p className="text-[18px]">WhatsApp</p>
                        </div>
                    </a>

                    <a href="https://discord.com/channels/@kkyhrl" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[160px] text-center justify-center hover:scale-105 duration-500 bg-[#5562EA] text-white rounded-[5px]">
                            <FaDiscord className="text-[20px]" />
                            <p className="text-[18px]">Discord</p>
                        </div>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default Sosmed;