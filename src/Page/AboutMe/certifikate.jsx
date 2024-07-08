import React, { useState } from "react";

import { PiCertificate } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import Serfikitat1 from "../../Assets/sertifikat/sertifikat1.jpg";
import Serfikitat2 from "../../Assets/sertifikat/sertifikat2.png";
import Serfikitat3 from "../../Assets/sertifikat/sertifikat3.png";
import Serfikitat4 from "../../Assets/sertifikat/sertifikat4.png";
import Serfikitat5 from "../../Assets/sertifikat/sertifikat5.png";
import Serfikitat6 from "../../Assets/sertifikat/sertifikat6.png";
import Serfikitat7 from "../../Assets/sertifikat/sertifikat7.png";
import Serfikitat8 from "../../Assets/sertifikat/sertifikat8.png";
import Serfikitat9 from "../../Assets/sertifikat/sertifikat9.jpg";
import Serfikitat10 from "../../Assets/sertifikat/sertifikat10.png";

const Certifikate = () => {
  const [images] = useState([
    { 
        src: Serfikitat9, 
        title: 'PT. Catur Sangkara Teknologi', 
        tema: 'Internship', 
        waktu: '22 January 2024 - 21 June 2024',
        deskripsi: 'I received this certificate after completing a 6-month internship at PT. Catur Sangkara Teknologi, where my job was as a frontend developer.'
    },
    { 
        src: Serfikitat1, 
        title: 'Wanteknologi', 
        tema: 'Front-end Development with The Progressive JavaScript Framework Vue.JS ', 
        waktu: '30 October - 03 November 2023',
        deskripsi: 'I received this certificate after completing a Vue JS learning program with Wanteknologi Company.'
    },
    { 
        src: Serfikitat2, 
        title: 'Cyberlabs', 
        tema: 'Backend Development With JavaScript Framework', 
        waktu: '10 November 2023',
        deskripsi: 'I received this certificate after completing a backend development course using Node.js and Express.js from Cyberlabs.'
    },
    { 
        src: Serfikitat3, 
        title: 'Dicoding', 
        tema: 'Belajar Dasar Pemrograman Web', 
        waktu: '22 September 2023',
        deskripsi: 'I received this certificate after completing a basic web programming course from the renowned platform Dicoding.'
    },
    { 
        src: Serfikitat4, 
        title: 'Creative Station', 
        tema: 'Menguasai Mikrokontroller dan Pemrograman Dasar dengan Arduino', 
        waktu: '28 August 2022',
        deskripsi: 'I received this certificate after completing a course on Arduino via Zoom with an expert in the field, organized by Creative Station.'
    },
    { 
        src: Serfikitat5, 
        title: 'Dunia Coding', 
        tema: 'Membuat Aplikasi To Do List dengan Laravel', 
        waktu: '-',
        deskripsi: 'I received this certificate after completing a course on developing applications using the Laravel framework, organized by Dunia Coding.'
    },
    { 
        src: Serfikitat6, 
        title: 'Kemendikbud', 
        tema: 'Uji Kemahiran Berbahasa Indonesia', 
        waktu: '29 September 2023',
        deskripsi: 'In spite of not obtaining this certificate from programming studies, I am proud to have received it, and its value is quite satisfying to me.'
    },
    { 
        src: Serfikitat7, 
        title: 'Dunia Coding', 
        tema: 'Tutorial Data Tables Server Side dengan Laravel', 
        waktu: '-',
        deskripsi: 'I received this certificate after completing a course on Data Tables Server Side with Laravel, organized by Dunia Coding.'
    },

    { 
        src: Serfikitat8, 
        title: 'Dunia Coding', 
        tema: 'Belajar Pemrograman Dasar C++', 
        waktu: '-',
        deskripsi: 'I received this certificate upon completing a C++ learning program by Dunia Coding.'
    },

    { 
        src: Serfikitat10, 
        title: 'Kampus Gratis', 
        tema: 'Web Design Fundamentals - Transforming Lines Of Code Into Digital Excellence', 
        waktu: '29 April - 08 July 2023',
        deskripsi: 'I received this certificate after studying HTML CSS and JS and I did several assignments given from each module.'
    },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div>
      <div>
        <div className="flex gap-[5px] items-center">
          <PiCertificate className="text-[20px]" />
          <p className="font-medium text-[20px]">Certification</p>
        </div>  
        <p className="text-[#525252] text-[16px]">Certificate that I have received</p>

        <div className="flex justify-center gap-[30px] flex-wrap px-[20px]">

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{images[currentImageIndex].title}</h2>
            <div className="flex">
              <p className="w-full md:w-[350px] lg:w-[400px] text-[14px]">{images[currentImageIndex].tema}</p>
            </div>
            <div className="flex gap-[5px] items-center text-blue-600 mt-[10px]">
              <FaRegCalendarAlt />
              <p className="text-[13px]">{images[currentImageIndex].waktu}</p>
            </div>
            <p className="mt-[20px] text-[20px] font-bold">Description:</p>
            <div className="flex">
              <p className="w-full lg:w-[400px] text-[15px] mt-[10px]">{images[currentImageIndex].deskripsi}</p>
            </div>
          </div>

          <div className="w-[400px]">
            <img 
                src={images[currentImageIndex].src}
                className="w-full shadow-md rounded-[10px]"
            />

            <div className="flex justify-end mt-4 gap-[10px]">

            <button 
                onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
                <FaArrowLeft />
            </button>

            <button 
                onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
                <FaArrowRight />
            </button>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Certifikate;
