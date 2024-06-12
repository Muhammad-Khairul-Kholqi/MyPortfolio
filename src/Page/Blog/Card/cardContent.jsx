import { Link } from "react-router-dom";
import School from "../../../Assets/project/school.png";
import { RiUser3Line } from "react-icons/ri";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
};

const cssClass = "mr-[10px]";
const htmlClass = "mr-[10px]";
const jsClass = "mr-[10px]";

const projects = [
    { 
        image: School,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit", 
        tech: (
            <div>
                <span className={cssClass}>#css</span>
                <span className={htmlClass}>#html</span>
                <span className={jsClass}>#javaScript</span>
            </div>
        ),
        author: "Khairul Kholqi", 
        date: "Dec 09, 2034" 
    },

];

const CardContent = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-[30px]">
                {projects.map((project, index) => (
                    <div key={index}>
                       <Link>
                            <div className="relative overflow-hidden rounded-[7px]">
                                <img 
                                    src={project.image} 
                                    className="transition-transform transform-gpu hover:scale-110 duration-500 max-w-[600px] rounded-[7px] w-full" 
                                    alt="School"
                                />
                            </div>
                            <div>
                                <p className="text-[17px] mt-[10px]">{truncateText(project.title, 10)}</p>
                            </div>
                            <div className="flex justify-between items-center gap-[20px] flex-wrap mt-[10px]">
                                <div className="text-[12px]">
                                    {project.tech}
                                </div>
                                <div className="flex gap-[10px]">
                                    <div className="text-[12px]">
                                        {project.date}
                                    </div>
                                    <div className="text-[12px]">
                                        {project.author}
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                ))}
            </div>
        </div>
        // <div className="flex flex-col items-center px-[20px]">
        //     {projects.map((project, index) => (
        //         <div key={index} className="pb-[30px]">
                    // <div className="relative overflow-hidden border-b">
                    //     <img 
                    //         src={project.image} 
                    //         className="foto-content transition-transform transform-gpu hover:scale-110 duration-500 max-w-[400px] w-full" alt="School"
                    //     />
                    // </div>
        //             <p className="title-content max-w-[380px] w-full mt-[10px] font-bold text-[18px] text-[#201654]">
        //                 {truncateText(project.title, 10)}
        //             </p>
        //             <div className="flex gap-[20px] flex-wrap mt-[10px] pr-[10px]">
        //                 <div className="flex gap-[5px] items-center">
        //                     <RiUser3Line className="text-blue-600" />
        //                     <p className="nama-pembuat text-gray-600 text-[11px]">{project.author}</p>
        //                 </div>

        //                 <div className="flex gap-[5px] items-center">
        //                     <FaRegCalendarAlt className="text-blue-600" />
        //                     <p className="tanggal-buat text-gray-600 text-[11px]">{project.date}</p>
        //                 </div>
        //             </div>
        //             <p className="deskripsi-content mt-[20px] max-w-[380px] w-full text-[13px]">
        //                 {truncateText(project.description, 20)}
        //             </p>
        //             <Link to="/code" className="mt-[20px] flex items-center gap-[10px] hover:text-blue-600">
        //                 <p className="tutorial">See Tutorial</p>
        //                 <FaArrowRight className="mt-[5px]" />
        //             </Link>
        //         </div>
        //     ))}
        //     <hr className="w-full border-gray-300 py-[20px]" />
        // </div>
    );
}

export default CardContent;
