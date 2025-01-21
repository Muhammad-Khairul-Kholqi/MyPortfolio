import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Sosmed = () => {
    const socialMediaLinks = [
        {
            href: "https://www.linkedin.com/in/muhamma-khairul-kholqi-9b9413326/",
            icon: <FaLinkedinIn className="text-[30px] text-blue-600" />,
            lineColor: <div className="bg-blue-600 w-[2.5px] rounded-[50px] h-[40px]"></div>,
            title: "Let's connect",
            subtitle: "Muhammad Khairul Kholqi"
        },
        {
            href: "https://github.com/Muhammad-Khairul-Kholqi/",
            icon: <FiGithub className="text-[30px] text-green-600" />,
            lineColor: <div className="bg-green-600 w-[2.5px] rounded-[50px] h-[40px]"></div>,
            title: "Explore the code",
            subtitle: "Irull's"
        },
        {
            href: "https://www.instagram.com/khayrl__/",
            icon: <FaInstagram className="text-[30px] text-red-600" />,
            lineColor: <div className="bg-red-600 w-[2.5px] rounded-[50px] h-[40px]"></div>,
            title: "Follow Me",
            subtitle: "@kkyhrl"
        }
    ];

    return (
        <div>
            <p className="text-[16px]">Find Me</p>
            <div className="flex justify-start items-center flex-wrap gap-[20px] mt-[20px]">
                {socialMediaLinks.map((link, index) => (
                    <a href={link.href} target="blank" key={index}>
                        <div className="flex gap-[10px] justify-start items-center py-[10px] px-[20px] w-[270px] bg-white border hover:shadow-lg duration-300 rounded-[10px]">
                            {link.icon}
                            {link.lineColor}
                            <div>
                                <p>{link.title}</p>
                                <p className="text-gray-400 text-[13px]">{link.subtitle}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sosmed;
