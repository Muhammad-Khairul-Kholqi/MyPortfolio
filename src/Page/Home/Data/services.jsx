import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { LuPencilRuler } from "react-icons/lu";

const Services = () => {
    const services = [
        {
            icon: <AiOutlineCode className="text-[#ED6262]" />,
            title: <span style={{ color: '#ED6262' }}>Website Development</span>,
            hashtags: ["#coding"],
            description: "Create stunning, easy-to-use frontend web applications using modern technologies."
        },
        {
            icon: <LuPencilRuler className="text-[#76D0EB]" />,
            title: <span style={{ color: '#76D0EB' }}>UI Designer</span>,
            hashtags: ["#design"],
            description: "Provides a modern and responsive design across a variety of devices."
        },        
    ];

    return (
        <div>
            <div className="flex gap-[5px] items-center">
                <MdMiscellaneousServices className="shake-animation text-[20px]" />
                <p className="text-[20px] font-sora font-medium">Services</p>
            </div>
            <p className="text-[16px] pl-[25px] text-[#525252]">I can deliver the following services</p>

            <div className="flex justify-start flex-wrap gap-[20px] mt-[20px] px-[20px]">
                {services.map((service, index) => (
                    <div key={index} className="p-[20px] border  rounded-[10px] hover:shadow duration-500 cursor-default">
                        <div className="flex gap-[5px] flex-wrap items-center">
                            {service.icon}
                            <p className="text-[16px]">{service.title}</p>
                        </div>
                        <p className="text-[12px] my-[5px] text-gray-700">{service.hashtags.join(" ")}</p>
                        <p className="max-w-[300px] w-full text-[14px] text-gray-700 flex flex-wrap" style={{ overflowWrap: 'break-word' }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
