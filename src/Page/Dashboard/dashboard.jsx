import Contributions from "./contributions";
import StaticLanguage from "./staticLanguage";

const Dashboard = () => {
    return (
        <div>
            <div className="pb-[20px] mt-[25px]">
                <p className="font-medium text-[25px]">Dashboard</p>
                <p className="text-[18px]">This is my personal dashboard</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <div className="mt-[20px]">
                <Contributions />
            </div>

            <div className="mt-[20px]">
                <StaticLanguage />
            </div>
        </div>
    )
}

export default Dashboard;