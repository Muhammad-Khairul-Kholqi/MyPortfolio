import Php from '../../Assets/skills/php.png';
import Mysql from '../../Assets/skills/mysql.png';
import Express from '../../Assets/skills/express.png';
import Laravel from '../../Assets/skills/laravel.png';

const Backend = () => {
    const dataRoadmap = [
        {
            image: Php,
            title: "Php"
        },

        {
            image: Mysql,
            title: "MySQL"
        },

        {
            image: Laravel,
            title: "Laravel"
        },

        {
            image: Express,
            title: "Express Js"
        },

    ]

    return (
        <div>
            <div className="">
                {dataRoadmap.map((item, index) => (
                    <div className="flex gap-[10px] flex-wrap items-center border p-[10px] rounded-[10px] hover:shadow duration-500 mb-[10px]" key={index}>
                        <div>
                            <img 
                                className="w-[20px]"
                                src={item.image}
                            />
                        </div>
                        <div>
                            <p className="text-[13px]">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Backend;