import { useState } from "react";

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
import Serfikitat11 from "../../Assets/sertifikat/sertifikat11.png";

const Certifikate = () => {
  const [images] = useState([
    { 
        src: Serfikitat9, 
        title: 'PT. Catur Sangkara Teknologi', 
        tema: 'Internship', 
        waktu: '22 January 2024 - 21 June 2024',
        deskripsi: 'This certificate marks the successful completion of a 6-month internship as a frontend developer at PT. Catur Sangkara Teknologi.'
    },
    { 
        src: Serfikitat1, 
        title: 'Wanteknologi', 
        tema: 'Front-end Development with The Progressive JavaScript Framework Vue.JS', 
        waktu: '30 October - 03 November 2023',
        deskripsi: 'Awarded upon finishing a comprehensive Vue JS learning program hosted by Wanteknologi Company.'
    },
    { 
        src: Serfikitat2, 
        title: 'Cyberlabs', 
        tema: 'Backend Development With JavaScript Framework', 
        waktu: '10 November 2023',
        deskripsi: 'Achieved this certification after completing an intensive course in backend development using Node.js and Express.js at Cyberlabs.'
    },
    { 
        src: Serfikitat3, 
        title: 'Dicoding', 
        tema: 'Belajar Dasar Pemrograman Web', 
        waktu: '22 September 2023',
        deskripsi: 'This certificate celebrates my completion of a foundational web programming course from the esteemed Dicoding platform.'
    },
    { 
        src: Serfikitat4, 
        title: 'Creative Station', 
        tema: 'Menguasai Mikrokontroller dan Pemrograman Dasar dengan Arduino', 
        waktu: '28 August 2022',
        deskripsi: 'Earned this certificate after participating in an engaging Arduino course via Zoom with a leading expert, organized by Creative Station.'
    },
    { 
        src: Serfikitat5, 
        title: 'Dunia Coding', 
        tema: 'Membuat Aplikasi To Do List dengan Laravel', 
        waktu: '-',
        deskripsi: 'This certificate is a testament to my skills developed through a course on Laravel application development, hosted by Dunia Coding.'
    },
    { 
        src: Serfikitat6, 
        title: 'Kemendikbud', 
        tema: 'Uji Kemahiran Berbahasa Indonesia', 
        waktu: '29 September 2023',
        deskripsi: 'While not directly related to programming, this certificate reflects my achievement in mastering the Indonesian language.'
    },
    { 
        src: Serfikitat7, 
        title: 'Dunia Coding', 
        tema: 'Tutorial Data Tables Server Side dengan Laravel', 
        waktu: '-',
        deskripsi: 'Successfully completed a course on Data Tables Server Side with Laravel, earning this certificate from Dunia Coding.'
    },
    { 
        src: Serfikitat8, 
        title: 'Dunia Coding', 
        tema: 'Belajar Pemrograman Dasar C++', 
        waktu: '-',
        deskripsi: 'This certificate acknowledges my dedication in completing a C++ learning program offered by Dunia Coding.'
    },
    { 
        src: Serfikitat10, 
        title: 'Kampus Gratis', 
        tema: 'Web Design Fundamentals - Transforming Lines Of Code Into Digital Excellence', 
        waktu: '29 April - 08 July 2024',
        deskripsi: 'Celebrating my journey through HTML, CSS, and JS, this certificate was awarded for completing various assignments in the course.'
    },
    { 
        src: Serfikitat11, 
        title: 'Free Code Camp', 
        tema: 'Responsive Web Design', 
        waktu: '12 July 2024',
        deskripsi: 'This certificate represents the successful completion of tasks and challenges set forth by Free Code Camp.'
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
        <p className="text-[#525252] text-[16px]">Total Certificates: {images.length}</p>

        <div className="flex justify-center gap-[30px] flex-wrap mt-[20px]">
          <div>
            <h2 className="text-3xl font-bold mb-2">{images[currentImageIndex].title}</h2>
            <div className="flex">
              <p className="w-full md:w-[350px] lg:w-[400px] text-[20px]">{images[currentImageIndex].tema}</p>
            </div>
            <div className="flex gap-[5px] items-center text-blue-600 mt-[10px]">
              <FaRegCalendarAlt />
              <p className="text-[17px]">{images[currentImageIndex].waktu}</p>
            </div>
            <p className="mt-[20px] text-[20px] font-bold">Description:</p>
            <div className="flex">
              <p className="w-full lg:w-[400px] text-[17px] mt-[10px]">{images[currentImageIndex].deskripsi}</p>
            </div>
          </div>

          <div className="w-[650px]">
            <img 
                src={images[currentImageIndex].src}
                className="w-full shadow-md"
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
