import AboutMeSingkat from "./Data/aboutMeSingkat";
import Services from "./Data/services";
import SoftSkills from "./Data/softSkills";
import KerjaSama from "./Data/kerjaSama";
import Footer from "../../Template/footer";

const Home = () => {
    return (
        <div>
            <div className="py-[20px]">
                <AboutMeSingkat />
            </div>

           <hr className="border-t border-dashed border-gray-500" /> 

           <div className="py-[20px]">
                <SoftSkills />
            </div>

           <hr/>

           <div className="my-[20px]">
                <Services />
            </div>

            {/* <hr /> */}

            <div className="mt-[20px]">
                <KerjaSama />
            </div>

            <div className="mt-[50px]">
                <Footer />
            </div>
        </div>
    )
}

export default Home;