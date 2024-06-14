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

import Navbar from "../../Assets/blog/navbar.png";

const BlogData = [
    {
        id: 1,
        title: "Responsive Navbar using HTML, CSS & JS",
        description: "Code to create responsive navbar using HTML, CSS and JS.",
        date: "14 jun 2024",
        image: Navbar,
        descriptionCode: "Below is the code for creating a navbar using HTML CSS and JS. prepare the index.html, style.css and script.js files, connect the CSS and JS files with the HTML so that they are connected.",
        code: {
        html: 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <!-- link CDN feather icon untuk navbar icon -->
    <script src="https://unpkg.com/feather-icons"></script>
    <!-- link css file -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <!-- custom logo sesuai keinginan bisa menggunakan image -->
        <div class="navbar-logo">
            <p>Logo.</p>
        </div>
        <div class="navbar-nav-link">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#porfolio">Portofolio</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="navbar-extra">
            <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
        </div>
    </nav>

    <!-- script untuk nyambungin ke file js -->
    <script src="script.js"></script>
    <!-- script feather icon -->
    <script>
      feather.replace();
    </script>
</body>
</html>`,
        css: 
`body {
    background-color: #fff;
    margin: 0;
    padding: 0;
}

.navbar-logo p {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

.navbar .navbar-nav-link a {
    color: #000000;
    display: inline-block;
    font-size: 18px;
    font-family: 'Nunito Sans',
        sans-serif;
    font-weight: bold;
    margin: 0 1rem;
    text-decoration: none;
}

.navbar-nav-link {
    margin-top: 5px;
}

.navbar .navbar-nav-link a:hover {
    background-color: #0060FF;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.navbar .navbar-nav-link a::after {
    content: '';
    display: block;
    padding-bottom: 3px;
    background-color: #0060FF;
    transform: scaleX(0);
    transition: 0.2s linear;
}

.navbar .navbar-nav-link a:hover::after {
    transform: scaleX(0.7);
}

.navbar .navbar-extra a {
    color: black;
    margin: 0 0.5rem;
}

#hamburger-menu {
    display: none;
    width: 30px;
}

.navbar-extra img {
    width: 35px;
}



@media (max-width: 800px) {
    .navbar .navbar-nav-link a {
        margin: 0 0.8rem;
    }
}

@media (max-width: 758px) {
    #hamburger-menu {
        display: inline-block;
    }

    .navbar .navbar-nav-link {
        position: absolute;
        top: 100%;
        right: -100%;
        background-color: #ffffff;
        width: 16rem;
        height: 82vh;
        transition: 0.3s;
        border-top: 3px solid red;
        margin-top: -1px;
    }

    .navbar .navbar-nav-link.active {
        right: 0;
    }

    .navbar .navbar-nav-link a {
        color: black;
        display: block;
        margin: 1.5rem;
        padding: 0.5rem;
        font-size: 18px;
    }

    .navbar .navbar-nav-link a::after {
        transform-origin: 0 0;
    }

    .navbar .navbar-nav-link a:hover::after {
        transform: scaleX(0.2);
    }

    .navbar .navbar-nav-link a:hover {
        background-color: #0060FF;
    }

    .navbar .navbar-nav-link a::after {
        background-color: #0060FF;
        padding-bottom: 1px;
    }

    .navbar .navbar-nav-link a:hover {
        background-color: #0060FF;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

}`,
        js: 
`const navbarNav = document.querySelector('.navbar-nav-link');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});`
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
                    <p className="text-start max-w-[700px] w-full text-[20px] font-bold mt-[20px]">Explanation:</p>
                </div>

                <div className="flex justify-center mt-[10px]">
                    <p className="text-start max-w-[700px] w-full text-[16px]">{blog.descriptionCode}</p>
                </div>

                <div className="flex justify-center mt-[10px]">
                    <p className="text-start max-w-[700px] w-full text-[20px] font-bold mt-[20px]">Code:</p>
                </div>

                <div className="flex justify-center">
                    <div className="w-[700px] flex gap-[20px] flex-wrap justify-between items-center">
                        <div>
                            <p className="text-start max-w-[700px] w-full text-[16px] mt-[10px]">HTML:</p>
                        </div>

                        <div>
                            <CopyToClipboard text={codeHtml} onCopy={handleCopy}>
                                <button className="flex items-center gap-[5px] mb-[10px] bg-white">
                                    {isCopied ? <IoCheckmarkDoneOutline /> : <IoCopyOutline />}
                                    {isCopied ? 'Copied!' : 'Copy'}
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-[10px]">
                    <SyntaxHighlighter language="html" style={anOldHope} className="rounded-[10px] max-w-[700px] w-full" showLineNumbers>
                        {codeHtml}
                    </SyntaxHighlighter>
                </div>

                <div className="flex justify-center mt-[20px]">
                    <div className="w-[700px] flex gap-[20px] flex-wrap justify-between items-center">
                        <div>
                            <p className="text-start max-w-[700px] w-full text-[16px] mt-[10px]">CSS:</p>
                        </div>

                        <div>
                            <CopyToClipboard text={codeCss} onCopy={handleCopy}>
                                <button className="flex items-center gap-[5px] mb-[10px] bg-white">
                                    {isCopied ? <IoCheckmarkDoneOutline /> : <IoCopyOutline />}
                                    {isCopied ? 'Copied!' : 'Copy'}
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-[10px]">
                    <SyntaxHighlighter language="css" style={anOldHope} className="rounded-[10px] max-w-[700px] w-full" showLineNumbers>
                        {codeCss}
                    </SyntaxHighlighter>
                </div>

                <div className="flex justify-center mt-[20px]">
                    <div className="w-[700px] flex gap-[20px] flex-wrap justify-between items-center">
                        <div>
                            <p className="text-start max-w-[700px] w-full text-[16px] mt-[10px]">JS:</p>
                        </div>

                        <div>
                            <CopyToClipboard text={codeJs} onCopy={handleCopy}>
                                <button className="flex items-center gap-[5px] mb-[10px] bg-white">
                                    {isCopied ? <IoCheckmarkDoneOutline /> : <IoCopyOutline />}
                                    {isCopied ? 'Copied!' : 'Copy'}
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-[10px]">
                    <SyntaxHighlighter language="javascript" style={anOldHope} className="rounded-[10px] max-w-[700px] w-full" showLineNumbers>
                        {codeJs}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}

export default BlogDetail;

