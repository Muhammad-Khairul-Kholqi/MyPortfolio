import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Sosmed = () => {
    return (
        <div>
            <div>
                <p className="text-[16px]">Find Me</p>

                <div className="flex justify-start items-center flex-wrap gap-[20px] mt-[20px]">
                    <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/" target="blank">
                        <div className="flex gap-[10px] justify-start items-center py-[10px] px-[20px] bg-white border hover:shadow-lg duration-300 rounded-[10px]">
                            <FaLinkedinIn className="text-[30px] text-blue-600" />
                            <div className="bg-blue-600 w-[2.5px] rounded-[50px] h-[40px]" />
                            <div>
                                <p>Let`s connect</p>
                                <p className="text-gray-400 text-[13px]">Muhammad Khairul Kholqi</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/Muhammad-Khairul-Kholqi/" target="blank">
                        <div className="flex gap-[10px] justify-start items-center py-[10px] px-[20px] bg-white border hover:shadow-lg duration-300 rounded-[10px]">
                            <FiGithub className="text-[30px] text-green-600" />
                            <div className="bg-green-600 w-[2.5px] rounded-[50px] h-[40px]" />
                            <div>
                                <p>Explore the code</p>
                                <p className="text-gray-400 text-[13px]">Irull's</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/kkyhrl/" target="blank">
                        <div className="flex gap-[10px] justify-start items-center py-[10px] px-[20px] bg-white border hover:shadow-lg duration-300 rounded-[10px]">
                            <FaInstagram className="text-[30px] text-red-600" />
                            <div className="bg-red-600 w-[2.5px] rounded-[50px] h-[40px]" />
                            <div>
                                <p>Follow Me</p>
                                <p className="text-gray-400 text-[13px]">@kkyhrl</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sosmed;