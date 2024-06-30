import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import Html from "../../Assets/skills/html.png";
import Css from "../../Assets/skills/css.png";
import Tailwind from "../../Assets/skills/tailwind.png";
import Bootstrap from "../../Assets/skills/bootstrap.png";
import Js from "../../Assets/skills/js.png";
import ReactImg from "../../Assets/skills/react.png";
import VueImg from "../../Assets/skills/vue.png";
import Php from "../../Assets/skills/php.png";
import Laravel from "../../Assets/skills/laravel.png";
import Mysql from "../../Assets/skills/mysql.png";
import Express from "../../Assets/skills/express.png";
import Github from "../../Assets/skills/github.png";
import Alpine from "../../Assets/skills/alpine.png";
import "../../Styles/styleSkill.css";

const Skill = () => {
    // Array of skills for the first marquee
    const marqueeContent1 = [
        { imgSrc: Html, name: "HTML" },
        { imgSrc: Css, name: "CSS" },
        { imgSrc: Tailwind, name: "Tailwind" },
        { imgSrc: Alpine, name: "Alpine Js" },
        { imgSrc: Bootstrap, name: "Bootstrap" },
        { imgSrc: Github, name: "Github" },
        { imgSrc: Mysql, name: "MySQL" }
    ];

    // Array of skills for the second marquee
    const marqueeContent2 = [
        { imgSrc: ReactImg, name: "React JS" },
        { imgSrc: VueImg, name: "Vue JS" },
        { imgSrc: Php, name: "PHP" },
        { imgSrc: Laravel, name: "Laravel" },
        { imgSrc: Alpine, name: "Alpine Js" },
        { imgSrc: Express, name: "Express" },
        { imgSrc: Js, name: "JavaScript" }
    ];

    return (
        <div>
            <div className="overflow-hidden py-[20px]">
                <div className="flex gap-[5px] items-center">
                    <GrTechnology />
                    <p className="font-medium text-[20px]">Technology </p>
                </div>
                <p className="text-[#525252]">My coding skills</p>

                <section className="enable-animation py-[10px]">
                    <div className="marquee">
                        <ul className="marquee__content">
                            {marqueeContent1.map((skill, index) => (
                                <div key={index} className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                    <img src={skill.imgSrc} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </ul>

                        <ul aria-hidden="true" className="marquee__content">
                            {marqueeContent2.map((skill, index) => (
                                <div key={index} className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                    <img src={skill.imgSrc} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="enable-animation2 py-[10px]">
                    <div className="marquee2">
                        <ul className="marquee__content2">
                            {marqueeContent1.map((skill, index) => (
                                <div key={index} className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                    <img src={skill.imgSrc} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </ul>

                        <ul aria-hidden="true" className="marquee__content2">
                            {marqueeContent2.map((skill, index) => (
                                <div key={index} className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                    <img src={skill.imgSrc} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skill;
