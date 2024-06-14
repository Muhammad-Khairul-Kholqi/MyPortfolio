import { Link } from "react-router-dom";

const CardBlog = ({blog}) => {
    return (
        <div>
            <div>
                <Link to={`/blog/${blog.id}`}>
                    <div>
                        <div>
                            <img
                                src={blog.image}
                                className="max-w-[400px] w-full duration-500 rounded-[10px]"
                            />
                        </div>
                        <p className="text-[17px] max-w-[390px] w-full capitalize mt-[10px]">
                            {blog.title}
                        </p>

                        <p className="text-[12px] max-w-[390px] w-full capitalize mt-[5px] text-[#525252]">
                            {blog.date}
                        </p>

                        <p className="text-[14px] max-w-[390px] w-full capitalize mt-[5px] text-[#525252]">
                            {blog.description.split(" ").slice(0, 12).join(" ") + "..."}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardBlog;
