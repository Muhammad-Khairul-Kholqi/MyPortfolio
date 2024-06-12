import school from "../../../Assets/project/school.png";
import { FaRegCalendarAlt } from "react-icons/fa";

const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
};

const CardTerbaru = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, numquam? adipisicing elit. Nobis, numquam?"
    return (
        <div>
            <div>
                <p className="text-[25px] font-bold">Latest Tutorials</p>
                <hr className="mt-[20px] border-black" />
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-center gap-[20px] flex-wrap justify-center shadow rounded-[10px] p-[10px] mt-[20px]">
                    <div>
                        <img 
                            src={school} 
                            className="foto max-w-[180px] w-full rounded-[10px]"
                        />
                    </div>
                    <div>
                        <p className="deskripsi max-w-[180px] w-full text-gray-700 text-[11px]">{truncateText(description, 10)}</p>
                        <div className="flex gap-[5px] mt-[10px] text-blue-600">
                            <FaRegCalendarAlt className="text-[15px]" />
                            <p className="text-[12px]">23 Oktober 2038</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-center gap-[20px] flex-wrap justify-center shadow rounded-[10px] p-[10px] mt-[20px]">
                    <div>
                        <img 
                            src={school} 
                            className="foto max-w-[180px] w-full rounded-[10px]"
                        />
                    </div>
                    <div>
                        <p className="deskripsi max-w-[180px] w-full text-gray-700 text-[11px]">{truncateText(description, 10)}</p>
                        <div className="flex gap-[5px] mt-[10px] text-blue-600">
                            <FaRegCalendarAlt className="text-[15px]" />
                            <p className="text-[12px]">23 Oktober 2038</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-center gap-[20px] flex-wrap justify-center shadow rounded-[10px] p-[10px] mt-[20px]">
                    <div>
                        <img 
                            src={school} 
                            className="foto max-w-[180px] w-full rounded-[10px]"
                        />
                    </div>
                    <div>
                        <p className="deskripsi max-w-[180px] w-full text-gray-700 text-[11px]">{truncateText(description, 10)}</p>
                        <div className="flex gap-[5px] mt-[10px] text-blue-600">
                            <FaRegCalendarAlt className="text-[15px]" />
                            <p className="text-[12px]">23 Oktober 2038</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTerbaru;