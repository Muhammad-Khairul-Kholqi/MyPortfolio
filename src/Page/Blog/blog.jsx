import React, { useEffect, useState } from 'react';
import CardBlog from "./cardBlog";
import Logo from "../../Assets/logo/logo.png";

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

                <div>
                    {blogs.map((blog) => (
                        <CardBlog key={blog.id} blog={blog} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Blog;