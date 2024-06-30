import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black text-center">
      <div className="flex gap-[20px] justify-center flex-wrap">
        <Link to="/aboutme">
          <div className="hover:text-blue-600">
            <p>About</p>
          </div>
        </Link>

        <Link to="/project">
          <div className="hover:text-blue-600">
            <p>Project</p>
          </div>
        </Link>

        <Link to="/contact">
          <div className="hover:text-blue-600">
            <p>Contact</p>
          </div>
        </Link>

        <Link to="/blog">
          <div className="hover:text-blue-600">
            <p>Blog</p>
          </div>
        </Link>
      </div>

      <div className="mt-[20px]">
        <p className="font-bold">Contact Me</p>
        <div className="mt-[40px] flex gap-[20px] justify-center flex-wrap">
          <div className="relative">
              <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/" target="blank" className="peer hover:text-blue-600">
                <FaLinkedinIn />
              </a>
              <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">Linkedin</div>
          </div>

          <div className="relative">
              <a href="https://www.instagram.com/kkyhrl/" target="blank" className="peer hover:text-blue-600">
                <FaInstagram />
              </a>
              <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">Instagram</div>
          </div>

          <div className="relative">
              <a href="https://github.com/Muhammad-Khairul-Kholqi" target="blank" className="peer hover:text-blue-600">
                <FiGithub />
              </a>
              <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">Github</div>
          </div>
        </div>
      </div>

      <p className="text-[14px] mt-[20px]">&copy; Copyright Khairul Kholqi - {currentYear} </p>
    </footer>
  );
};

export default Footer;
