import Intro from "./intro";
import Career from "./career";
import Education from "./education";
import Skill from "./skill";
import Certifikate from "./certifikate";
import Footer from "../../Template/footer";

const AboutMe = () => {
    return (
        <div>
            <div className="mt-[30px]">
                <Intro />
            </div>

            <hr className="mt-[20px]" />

            <div className="mt-[20px]">
                <Career />
            </div>

            <hr className="mt-[10px]" />

            <div className="mt-[20px]">
                <Education />
            </div>

            <hr className="mt-[20px]" />

            <div className="mt-[20px]">
                <Skill />
            </div>

            <hr className="mt-[20px]" />

            <div className="mt-[30px]">
                <Certifikate />
            </div>

            <div className="mt-[50px]">
                <Footer />
            </div>
        </div>
    )
}

export default AboutMe;