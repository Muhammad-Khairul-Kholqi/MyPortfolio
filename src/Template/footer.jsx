import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuCoffee } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const FooterMenu = [
    {
      textMenu: "About",
      path: "/aboutme"
    },

    {
      textMenu: "Blog",
      path: "/blog"
    },

    {
      textMenu: "Project",
      path: "/project"
    },

    {
      textMenu: "Contact",
      path: "/contact"
    },
  ]

  const LinkSosmed = [
        {
            link: "https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/",
            icon: <FaLinkedinIn />,
            textTooltip: "Linkedin"
        },

        {
            link: "https://www.instagram.com/kkyhrl/",
            icon: <FaInstagram />,
            textTooltip: "Instagram"
        },

        {
            link: "https://github.com/Muhammad-Khairul-Kholqi/",
            icon: <FiGithub />,
            textTooltip: "Github"
        },

        {
            link: "https://saweria.co/khrlkholqi/",
            icon: <LuCoffee />,
            textTooltip: "Sewaria"
        },
    ]

  return (
    <footer className="text-black text-center">
      <div className="flex gap-[20px] justify-center flex-wrap">
        {FooterMenu.map((menu, index) => (
          <Link key={index} to={menu.path}>
            <div className="hover:text-blue-600">
              <p>{menu.textMenu}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-[20px]">
        <p className="font-bold">Contact Me</p>
        <div className="sosmed mt-[40px] flex gap-[20px] justify-center flex-wrap">
            {LinkSosmed.map((sosmed, index) => (
              <div key={index} className="relative">
                  <a href={sosmed.link} target="blank" className="icon-sosmed peer hover:text-blue-600">
                      {sosmed.icon}
                  </a>
                  <div id="tooltipExample" className="absolute bg-[#E5E5E5] -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded px-2 py-1 text-center text-sm opacity-0 transition-all ease-out peer-hover:opacity-100 peer-focus:opacity-100" role="tooltip">{sosmed.textTooltip}</div>
              </div>
            ))}
        </div>
      </div>

      <p className="text-[14px] mt-[20px]">&copy; Copyright Khairul Kholqi - {currentYear} </p>
    </footer>
  );
};

export default Footer;
