import React, { useState, useRef } from 'react';
import "../../Styles/styleMusic.css";
import BgPlay from "../../Assets/bg-sidebar.jpg";
import myMusic from '../../Assets/music/musik.mp3';
import myMusic2 from '../../Assets/music/musik2.mp3';
import { FaPlay, FaPause } from 'react-icons/fa';

const LikedSongs = () => {
    const [songs, setSongs] = useState([
        { name: 'Akad', artist: 'Payung Teduh', src: myMusic },
        { name: 'Queen Of Disaster', artist: 'Lana Del Rey', src: myMusic2 },
    ]);
    const [isPlaying, setIsPlaying] = useState(new Array(songs.length).fill(false));
    const [currentTime, setCurrentTime] = useState(new Array(songs.length).fill(0));
    const [duration, setDuration] = useState(new Array(songs.length).fill(0));
    const audioRefs = useRef(songs.map(() => React.createRef()));

    const togglePlay = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = !newIsPlaying[index];
        setIsPlaying(newIsPlaying);
        if (newIsPlaying[index]) {
            audioRefs.current[index].current.play();
        } else {
            audioRefs.current[index].current.pause();
        }
    };

    const handleTimeUpdate = (index) => {
        const audio = audioRefs.current[index].current;
        const isLastSong = index === songs.length - 1;

        setCurrentTime((prev) => {
            const newCurrentTime = [...prev];
            newCurrentTime[index] = audio.currentTime;
            return newCurrentTime;
        });
        setDuration((prev) => {
            const newDuration = [...prev];
            newDuration[index] = audio.duration;
            return newDuration;
        });

        if (audio.currentTime >= audio.duration) {
            // Jika lagu saat ini adalah lagu terakhir, berhenti pemutaran
            if (isLastSong) {
                setIsPlaying(new Array(songs.length).fill(false));
                return;
            }
            
            // Beralih ke lagu berikutnya
            togglePlay(index + 1);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const truncate = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };

    return (
        <>
            <div>
                {songs.map((song, index) => (
                    <div key={index} className="max-w-xl p-[10px]">
                        <div className="container-music flex gap-[20px] flex-wrap items-center justify-between px-[20px]">
                            <div className="flex items-center">
                                <button 
                                    onClick={() => togglePlay(index)} 
                                    className="mr-4 text-white p-[10px] rounded-[5px]"
                                    style={{
                                        backgroundImage: `url(${BgPlay})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {isPlaying[index] ? <FaPause size={20} /> : <FaPlay size={20} />}
                                </button>

                                <div className="cursor-default">
                                    <p className="judul-lagu font-bold text-[14px]">{truncate(song.name, 15)}</p>
                                    <p className="artist text-[13px]">{truncate(song.artist, 15)}</p>
                                </div>
                            </div>

                            <audio
                                ref={audioRefs.current[index]}
                                src={song.src}
                                type="audio/mpeg"
                                onTimeUpdate={() => handleTimeUpdate(index)}
                                onLoadedMetadata={() => handleTimeUpdate(index)}
                            />

                            <div>
                                <span className="waktu ml-4 text-[14px] font-bold cursor-default">
                                    {formatTime(currentTime[index])} | {formatTime(duration[index])}
                                </span>
                            </div>
                        </div>
                        <hr className="mt-[20px]" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default LikedSongs;
