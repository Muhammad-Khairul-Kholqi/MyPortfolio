import React, { useState } from "react";
import "../../../Styles/styleBlog.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {IoCopyOutline, IoCheckmarkDoneOutline} from 'react-icons/io5';

const Css = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

  const codeSnippet = 
`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&family=Open+Sans:wght@500&family=Poppins:wght@700&display=swap');
body {
    background-color: #fff;
    margin: 0;
    padding: 0;
}

/* style bagian navbar dan responsivenya */
.navbar-logo img {
    width: 60px;
    cursor: pointer;
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
    box-shadow: 0px 0px 10px #000;
}

.navbar .navbar-nav-link a {
    color: #000000;
    display: inline-block;
    font-size: 18px;
    font-family: 'Open Sans',
    sans-serif;
    margin: 0 1rem;
    text-decoration: none;
}

.navbar-nav-link {
    margin-top: 5px;
}

.navbar .navbar-nav-link a:hover {
    background-color: #02C39A;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.navbar .navbar-nav-link a::after {
    content: '';
    display: block;
    padding-bottom: 3px;
    background-color: #02C39A;
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

}

/* css content */
.teks-brand {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    flex-wrap: wrap;
}

.teks {
    margin: 100px 50px;
}

.teks h1 {
    font-size: 50px;
    font-family: 'Poppins',
    sans-serif;
    color: red;
    margin-top: -1px;
}

.teks p {
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: -20px;
}

button {
    border: none;
    background-color: orangered;
    color: #fff;
    font-size: 15px;
    padding: 10px;
    border-radius: 5px;
}

.brand {
    margin: 50px;
}`;

  return (
    <div className="mt-[20px]">
            <div className="flex justify-end mb-2">
                <CopyToClipboard text={codeSnippet} onCopy={handleCopy}>
                    <button className="flex items-center gap-[5px] mb-[10px]">
                        {isCopied ? <IoCheckmarkDoneOutline /> : <IoCopyOutline />}
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </CopyToClipboard>
            </div>
            <div className = "conteiner-code h-[500px] overflow-x-hidden" >
                <SyntaxHighlighter language="html" style={anOldHope} showLineNumbers>
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
  );
};

export default Css;
