import ImgMe from "../../Assets/my-photo3.jpg";

const Intro = () => {
    return (
        <div>
            <div>
                <div>
                    <p className="text-[24px] font-medium">About</p>
                    <p className="text-[16px] text-[#525252]">A short story of me</p>
                </div>
                <hr className="border-t border-dashed border-gray-500 my-[20px]" /> 
                <div className="flex items-center flex-col md:flex-row gap-4">
                    <img
                        className="max-w-[200px] w-full h-[210px] object-cover"
                        src={ImgMe}
                        alt="Profile"
                    />
                    <p className="text-justify">
                        Hello! Thank you for visiting my personal website.
                        <br /><br />
                        I'm Khairul, a web developer who handles both the coding you see on the screen (frontend)
                        and the operations behind the scenes (backend).
                        <br /><br />
                        I have a deep passion for JavaScript and PHP, which are the languages I use to build websites.
                        I am also well-versed in various frameworks that make web development easier, such as React,
                        Vue, Node.js, and PHP frameworks like Laravel.
                    </p>
                </div>
                <p className="mt-4">
                    In my career, I have led teams in developing software for companies.
                    <br /><br />
                    I believe that good communication is crucial in any job.
                    <br /><br />
                    I am adaptable to different situations, work efficiently, and always strive to do my best.
                    My experience has taught me how to solve problems and lead teams, but I also enjoy collaborating
                    with others to get things done. I am very excited about the opportunity to work together and create amazing
                    things!
                    <br /><br />
                    I look forward to the possibility of working with you!
                </p>
            </div>
        </div>
    );
};

export default Intro;
    