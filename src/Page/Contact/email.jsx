import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Email = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div>
                <p className="text-[16px]">Or Send Me Email</p>
            </div>

            {showPopup && (
                <div className="popup flex pt-[10px]">
                    <div className="popup-inner flex gap-[20px] bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                        <div>
                            <h2 className="text-lg text-yellow-500">Email Not Sent!</h2>
                            <p className="text-sm">Sorry, we can't send emails at this time</p>
                        </div>
                        <div>
                            <button onClick={handleClosePopup} className="bg-yellow-50 text-lg text-yellow-500 mt-[6px]"><IoClose /></button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-[20px]">
                <form onSubmit={handleEmailSubmit}>
                    <div className="flex justify-center gap-[10px]">
                        <input 
                            className="w-full border h-[40px] px-[10px] rounded-[5px]"
                            type="text" 
                            placeholder="Name*"
                        />

                        <input 
                            className="w-full border h-[40px] px-[10px] rounded-[5px]"
                            type="text" 
                            placeholder="Subject*"
                        />
                    </div>
                    <textarea 
                        className="w-full border mt-[20px] px-[10px] rounded-[5px] pt-[7px]" 
                        placeholder="Message*"
                        style={{ height: '150px' }}
                    />

                    <button 
                        type="submit"
                        id="buttonEmail" 
                        className="w-full bg-[#262626] hover:bg-black py-[5px] rounded-[5px] text-white mt-[10px] h-[40px]"
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Email;
