import SearchBlog from "../../Utils/searchBlog";
import ContentTerbaru from "./contentTerbaru";
import CardContent from "./Card/cardContent";
import Footer from "../../Template/footer";
import Logo from "../../Assets/logo/logo.png";

const Blog = () => {
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
                    <CardContent />
                </div>

            </div>
            {/* <div className="pb-[20px]">
                <p className="font-bold text-[25px]">Blogs</p>
                <p className="text-[18px]">Share Web Development Tutorials</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <div className="flex justify-center flex-wrap gap-[20px] py-[20px] w-full">
                <div>
                    <div>
                        <SearchBlog />
                    </div>
                    <div className="mt-[20px] bg-white shadow-md border p-[20px] rounded-[10px]">
                        <ContentTerbaru />
                    </div>
                </div>
                <div>
                    <CardContent />
                </div>
            </div>

            <div className="mt-[50px]">
                <Footer />
            </div> */}
        </div>
    )
}

export default Blog;