import React, {useState} from "react";
import "../../../Styles/styleBlog.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {IoCopyOutline, IoCheckmarkDoneOutline} from 'react-icons/io5';

const Html = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };


    const codeSnippet =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
     <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
     <script src="https://unpkg.com/feather-icons"></script>
    <link rel="website icon" href="img/logo.png">
    <title>Website Hamburger</title>
</head>
<body>
    <!-- navbar -->
     <nav class="navbar">
         <div class="navbar-logo">
             <a href=""><img src="img/logo.png" draggable="false"></a>
         </div>
         <div class="navbar-nav-link">
             <a href="">Home</a>
             <a href="">About Us</a>
             <a href="">Menus</a>
             <a href="">Gallery</a>
             <a href="">Contact</a>
         </div>
         <div class="navbar-extra">
             <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
         </div>
     </nav>

     <!-- first content -->
     <div class="teks-brand">
        <div class="teks">
            <div class="stars">
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
            </div>
            <h1>Beef Burger</h1>
            <p>
                Indulge in the extraordinary deliciousness of our burgers<br>
                and savor an unparalleled culinary experience. Each bite is<br>
                a mesmerizing journey of flavors that captivates the palate.
            </p>
            <button>Order now</button>
        </div>
        <div class="brand">
            <img src="img/burger.png" draggable="false">
        </div>
     </div>

    <script src="script.js"></script>
    <script>
        feather.replace()
        AOS.init();
    </script>
</body>
</html>`;

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

export default Html;