import React, { useState } from "react";
import "../../../Styles/styleBlog.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { CopyToClipboard } from 'react-copy-to-clipboard';
import {IoCopyOutline, IoCheckmarkDoneOutline} from 'react-icons/io5';

const JavaScript = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

  const codeSnippet =
`const navbarNav = document.querySelector('.navbar-nav-link');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});`;

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

export default JavaScript;
