import { RxRocket } from "react-icons/rx";
import { Link } from "react-router-dom";

const KerjaSama = () => {
    return (
        <div className="px-[10px]">
           <div className="border border-dashed border-black p-[30px] rounded-[20px]">
                <div className="flex flex-wrap gap-[10px] justify-start items-center">
                    <RxRocket className="text-[30px]" />
                    <p className="text-[20px] font-bold">Lets Work Together!</p>
                </div>

                <p className="mt-[20px] text-[18px]">I'm open for freelance projects, feel free to email me to see how can we collaborate.</p>

                <Link to="/contact">
                    <button className="mt-[20px] bg-[#737373] hover:bg-[#555555] py-[10px] px-[20px] rounded-[10px] text-white">Contact Me</button>
                </Link>
           </div>
        </div>
    )
}

export default KerjaSama;