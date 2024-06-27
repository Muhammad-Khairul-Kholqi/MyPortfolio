import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="flex flex-col justify-center items-center h-screen px-[20px]">
            <div className="border w-[100px] h-[100px] rounded-[100%] border-black flex justify-center items-center">
                <p className="text-[30px] font-bold">404</p>
            </div>
            <p className="mt-[20px]">Oopsss!</p>
            <p className="text-center">The page your looking for could not be found.</p>
            <Link to="/" className="border p-[5px] text-gray-600 mt-[10px] hover:shadow-md duration-200">
                <p>Back to Home</p>
            </Link>
        </div>
    )
}

export default NotFound;
