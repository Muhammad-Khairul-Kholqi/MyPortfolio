import Sosmed from "./sosmed";
import Email from "./email";
import Footer from "../../Template/footer";

const Contact = () => {
    return (
        <div>
            <div className="pb-[20px] mt-[25px]">
                <p className="font-medium text-[25px]">Contact</p>
                <p className="text-[18px]">Let`s get in touch</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <div className="py-[20px]">
                <Sosmed />
            </div>

            <hr />

            <div className="py-[20px]">
                <Email />
            </div>

            <div className="mt-[50px]">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;