import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiKeyboardLine } from 'react-icons/ri';

const SearchProject = ({ setSearchQuery }) => {
    const searchInputRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            searchInputRef.current.focus();
        }
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <div className="flex items-center border-2 rounded-lg  px-3 py-2 bg-gray-100">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    ref={searchInputRef}
                    className="flex-1 outline-none bg-gray-100 text-sm sm:text-base"
                    placeholder="Search Title"
                    onChange={handleChange}
                />
                {/* <div className="ml-2 bg-gray-200 p-1 rounded flex items-center">
                    <RiKeyboardLine />
                    <span className="ml-1 text-xs sm:text-sm">K</span>
                </div> */}
            </div>
        </div>
    );
};

export default SearchProject;
