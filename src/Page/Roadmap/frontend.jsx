import Html from "../../Assets/skills/html.png"
import Css from "../../Assets/skills/css.png"
import Github from "../../Assets/skills/github.png"
import Bootstrap from "../../Assets/skills/bootstrap.png"
import Js from "../../Assets/skills/js.png"
import Tailwind from "../../Assets/skills/tailwind.png"
import React from "../../Assets/skills/react.png"
import Vue from "../../Assets/skills/vue.png"

const Frontend = () => {
    const dataRoadmap = [
        {
            image: Html,
            title: "HTML"
        },

        {
            image: Css,
            title: "Basic CSS"
        },

        {
            image: Css,
            title: "CSS Layout"
        },

        {
            image: Css,
            title: "CSS Flexbox"
        },

        {
            image: Css,
            title: "CSS Grid"
        },

        {
            image: Github,
            title: "Git & Github"
        },

        {
            image: Bootstrap,
            title: "Bootstrap"
        },

        {
            image: Tailwind,
            title: "Tailwind CSS"
        },

        {
            image: Js,
            title: "Basic Javascript"
        },

        {
            image: Js,
            title: "Javascript DOM"
        },

        {
            image: Js,
            title: "Advanced Javascript"
        },

        {
            image: Vue,
            title: "Vue Js"
        },

        {
            image: React,
            title: "React Js"
        },

    ]
    return (
        <div>
            <div className="">
                {dataRoadmap.map((item, index) => (
                    <div className="flex gap-[10px] flex-wrap items-center border p-[10px] rounded-[10px] hover:shadow duration-500 mb-[10px]" key={index}>
                        <div>
                            <img 
                                className="w-[20px]"
                                src={item.image}
                            />
                        </div>
                        <div>
                            <p className="text-[13px]">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Frontend;