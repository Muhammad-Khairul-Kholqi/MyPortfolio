import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import Html from "../../Assets/skills/html.png";
import Css from "../../Assets/skills/css.png";
import Tailwind from "../../Assets/skills/tailwind.png";
import Bootstrap from "../../Assets/skills/bootstrap.png";
import Js from "../../Assets/skills/js.png";
import React from "../../Assets/skills/react.png";
import Vue from "../../Assets/skills/vue.png";
import Php from "../../Assets/skills/php.png";
import Laravel from "../../Assets/skills/laravel.png";
import Mysql from "../../Assets/skills/mysql.png";
import Express from "../../Assets/skills/express.png";
import Github from "../../Assets/skills/github.png";
import "../../Styles/styleSkill.css";


const Skill = () => {
    return (
        <div>
            <div className="overflow-hidden py-[2s0px]">
                <div className="flex gap-[5px] items-center">
                    <GrTechnology />
                    <p className="font-medium text-[20px]">Technology </p>
                </div> 
                <p className="text-[#525252]">My coding skills</p> 

                <section className="enable-animation py-[10px]">
                    <div className="marquee">
                        <ul className="marquee__content">
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Html} alt="" />
                                <p>HTML</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Css} alt="" />
                                <p>CSS</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Tailwind} alt="" />
                                <p>Tailwind</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Bootstrap} alt="" />
                                <p>Bootstrap</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Github} alt="" />
                                <p>Github</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Mysql} alt="" />
                                <p>MySQL</p>
                            </div>
                        </ul>

                        <ul aria-hidden="true" className="marquee__content">
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={React} alt="" />
                                <p>React JS</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Vue} alt="" />
                                <p>Vue JS</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Php} alt="" />
                                <p>PHP</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Laravel} alt="" />
                                <p>Laravel</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Express} alt="" />
                                <p>Express</p>
                            </div>
                            <div className="marquee__item flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Js} alt="" />
                                <p>JavaScript</p>
                            </div>
                        </ul>
                    </div>
                </section>



                <section className="enable-animation2 py-[10px]">
                    <div className="marquee2">
                        <ul className="marquee__content2">
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Html} alt="" />
                                <p>HTML</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Tailwind} alt="" />
                                <p>Tailwind</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Css} alt="" />
                                <p>CSS</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Mysql} alt="" />
                                <p>MySQL</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Bootstrap} alt="" />
                                <p>Bootstrap</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={React} alt="" />
                                <p>React JS</p>
                            </div>
                        </ul>

                        <ul aria-hidden="true" className="marquee__content2">
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Github} alt="" />
                                <p>Github</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Vue} alt="" />
                                <p>Vue JS</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Laravel} alt="" />
                                <p>Laravel</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Express} alt="" />
                                <p>Express</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Php} alt="" />
                                <p>PHP</p>
                            </div>
                            <div className="marquee__item2 flex items-center gap-[5px] border py-[10px] px-[20px] rounded-[50px]">
                                <img src={Js} alt="" />
                                <p>JavaScript</p>
                            </div>
                        </ul>
                    </div>
                </section>

                
            </div>
        </div>
    )
}

export default Skill;