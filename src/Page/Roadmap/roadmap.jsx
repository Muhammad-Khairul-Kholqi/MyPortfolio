import Tabs from "./tabs";

const Roadmap = () => {
    return (
        <div>
            <div className="pb-[20px]">
                <p className="font-medium text-[25px]">Roadmap</p>
                <p className="text-[18px]">The recommended learning in my opinion</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <div>
                <Tabs />
            </div>
        </div>
    )
}

export default Roadmap;