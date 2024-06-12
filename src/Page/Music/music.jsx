import LikedSongs from "./likedSongs";

const Music = () => {
    return (
        <div>
            <div className="pb-[20px]">
                <p className="font-medium text-[25px]">Music</p>
                <p className="text-[18px]">Share Some Music That I Like</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <div className="mt-[20px]">
                <LikedSongs />
            </div>
        </div>
    )
}

export default Music;