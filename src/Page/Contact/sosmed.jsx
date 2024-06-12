import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Sosmed = () => {
    return (
        <div>
            <div>
                <p className="font-bold text-[20px]">Find Me</p>

                <div className="flex justify-start items-center flex-wrap gap-[20px] mt-[20px]">
                    <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[150px] text-center justify-center hover:scale-105 duration-500 bg-[#3B82F6] text-white rounded-[5px]">
                            <FaLinkedinIn className="text-[20px]" />
                            <p className="text-[18px]">Linkedin</p>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/kkyhrl/" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[150px] text-center justify-center hover:scale-105 duration-500 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 text-white rounded-[5px]">
                            <FaInstagram className="text-[20px]" />
                            <p className="text-[18px]">Instagram</p>
                        </div>
                    </a>

                    <a href="https://github.com/Muhammad-Khairul-Kholqi" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[150px] text-center justify-center hover:scale-105 duration-500 bg-black text-white rounded-[5px]">
                            <FiGithub className="text-[20px]" />
                            <p className="text-[18px]">Github</p>
                        </div>
                    </a>

                    <a href="https://wa.me/0895329761084" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[150px] text-center justify-center hover:scale-105 duration-500 bg-green-600 text-white rounded-[5px]">
                            <FaWhatsapp className="text-[20px]" />
                            <p className="text-[18px]">WhatsApp</p>
                        </div>
                    </a>

                    <a href="https://discord.com/channels/@kkyhrl" target="blank">
                        <div className="flex gap-[10px] items-center py-[10px] px-[20px] w-[150px] text-center justify-center hover:scale-105 duration-500 bg-[#5562EA] text-white rounded-[5px]">
                            <FaDiscord className="text-[20px]" />
                            <p className="text-[18px]">Discord</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sosmed;