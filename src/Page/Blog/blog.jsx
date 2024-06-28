import React, { useEffect, useState } from 'react';
import CardBlog from "./cardBlog";
import Logo from "../../Assets/logo/logo.png";

import Navbar from "../../Assets/blog/navbar.png";

const BlogData = [
    {
        slug: 'responsive-navbar-using-html-css-js',
        title: "Responsive Navbar using HTML, CSS & JS",
        description: "Code to create responsive navbar using HTML, CSS and JS.",
        date: "14 jun 2024",
        image: Navbar,
    },
];

const Blog = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        setBlog(BlogData);
    }, []);
    return (
        <div>
            <div>
                <div className="flex justify-center mt-[20px]">
                    <img 
                        src={Logo} 
                        className="w-[70px]"
                    />
                </div>
                <p className="text-center text-[14px]">Welcome to my blog! Your Source for Tips and Insights!</p>

                <div className="flex justify-center gap-[20px] flex-wrap mt-[20px]">
                    {blogs.map((blog) => (
                        <CardBlog key={blog.slug} blog={blog} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Blog;