import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {IoCopyOutline, IoCheckmarkDoneOutline} from 'react-icons/io5';

import schoolImage from '../../Assets/project/school.png';

const BlogData = [
    {
        id: 1,
        title: "orem ipsum dolor sit amet consectetur .",
        description: "orem ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat nihil neque fuga est ex deserunt exercitationem ut repudiandae praesentium.",
        date: "12 des 2023",
        image: schoolImage,
        code: {
        html: 
`orem ipsum dolor sit amet consectetur adipisicing`,
        css: 
`orem ipsum dolor sit amet consectetur adipisicing`,
        js: 
`orem ipsum dolor sit amet consectetur adipisicing`
        }
    },
];


const BlogDetail = () => {
    AOS.init();

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const { id } = useParams();
    const blog = BlogData.find((blog) => blog.id === parseInt(id));

    if (!blog) return <div>Blog not found</div>;

    const codeHtml = BlogData[0].code.html;
    const codeCss = BlogData[0].code.css;
    const codeJs = BlogData[0].code.js;
    return (
        <>
            <div 
                className="pb-[50px] px-[20px]"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <Link to="/blog">
                    <div className="flex items-center gap-[5px] justify-center mt-[50px]">
                        <IoArrowBackCircleOutline className="text-[#525252] text-[18px]" />
                        <p className="text-start max-w-[680px] w-full text-[16px] text-[#525252]">Back</p>
                    </div>
                </Link>

                <div className="flex justify-center mt-[15px]">
                    <h1 className="text-start max-w-[700px] w-full text-[20px]">{blog.title}</h1>
                </div>

                <div className="flex justify-center">
                    <div className="w-[700px] flex gap-[20px] flex-wrap justify-start items-center mt-[10px]">
                        <p className="text-[14px]">{blog.date}</p>
                    </div>
                </div>

                <hr className="max-w-[700px] border-dashed border-black mx-auto my-[20px]" />

                <div className="flex justify-center mt-[20px]">
                    <img 
                        className="max-w-[700px] w-full shadow border rounded-[10px]"
                        src={blog.image}
                    />
                </div>

                <div className="flex justify-center mt-[10px]">
                    <p className="text-start max-w-[700px] w-full text-[16px]">{blog.description}</p>
                </div>

                <div className="flex justify-center mt-[10px]">
                    <p className="text-start max-w-[700px] w-full text-[20px] font-bold mt-[20px]">Code:</p>
                </div>

                <div className="flex justify-center mt-[20px]">
                    <SyntaxHighlighter language="html" style={anOldHope} className="rounded-[10px] max-w-[700px] h-[200px] w-full" showLineNumbers>
                        {codeHtml}
                    </SyntaxHighlighter>
                </div>

                <div className="flex justify-center mt-[20px]">
                    <SyntaxHighlighter language="css" style={anOldHope} className="rounded-[10px] max-w-[700px] h-[200px] w-full" showLineNumbers>
                        {codeCss}
                    </SyntaxHighlighter>
                </div>

                <div className="flex justify-center mt-[20px]">
                    <SyntaxHighlighter language="js" style={anOldHope} className="rounded-[10px] max-w-[700px] h-[200px] w-full" showLineNumbers>
                        {codeJs}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}

export default BlogDetail;