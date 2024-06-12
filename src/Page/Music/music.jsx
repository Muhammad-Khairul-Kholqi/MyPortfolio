import LikedSongs from "./likedSongs";

const Music = () => {
    return (
        <div>
            <div className="pb-[20px]">
                <p className="font-bold text-[25px]">Music</p>
                <p className="text-[18px]">Share Some Music That I Like</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <div className="mt-[20px]">
                <LikedSongs />
            </div>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A vel obcaecati nesciunt voluptates delectus inventore fugit, iure quis quia officia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam.</p>
        </div>
    )
}

export default Music;