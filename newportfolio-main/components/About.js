import { sectionHeading } from "@/shared/SharedComponents";
import React from "react";
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import { scrollNavItemSmooth } from "@/shared/ShareFunction";
import { BiCodeAlt } from "react-icons/bi";
import { FaDev } from "react-icons/fa";

const About = () => {
  const SocialLinks = () => {
    return (
      <>
        <a
          href="https://github.com/tarun-duh"
          target="_blank"
          className="hover:scale-150 duration-200"
        >
          <BsGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/tarun-duh/"
          target="_blank"
          className="hover:scale-150 duration-200"
        >
          <BsLinkedin />
        </a>
      </>
    );
  };

  return (
    <div>
      {sectionHeading("Who I am", "About")}

      <div className="flex flex-col-reverse sm:flex-row sm:mt-6 sm:items-center">
        <div className="space-y-3 sm:w-3/5">
          <h3 className="text-xl sm:text-3xl font-medium custom-font">
            Hi, I'm an aspiring Data Analyst 🚀 based in Delhi, India.
          </h3>
          <p className="text-base sm:text-lg text-gray-200">
            Motivated Data Analyst fresher with IBM certifications seeking an
            entry-level role to apply analytical, problem-solving, and data
            visualization skills. Aiming to contribute to data-driven
            decision-making while continuously learning and growing in a
            professional environment.
          </p>

          {/* <div className="text-base sm:text-lg text-gray-200">
            Here are a few technologies I've been working with recently:
            <ul className="grid grid-cols-2 mt-3">
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Python </span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> SQL </span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Power BI</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Microsoft Excel </span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> Tableau </span>
              </li>
              <li className="flex items-center space-x-2">
                <TbPoint /> <span> JavaScript </span>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="sm:mx-auto my-5 sm:w-2/5 ">
          <div className="flex items-center">
            <img
              src="/Images/profile.jpg"
              alt="profile"
              className="w-60 md:w-72 rounded-3xl border-8 border-gray-100 sm:mx-auto"
            />
            <div className="ml-6 space-x-6 text-2xl my-3 sm:hidden">
              <SocialLinks />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl sm:text-center font-medium custom-font my-4">
            Tarun Singh
          </p>
          <div className="w-fit flex space-x-3 sm:mx-auto sm:mb-4">
            <a
              href="https://drive.google.com/file/d/1RlP-IMOeJ4h9KrOuGeKOYlDQU2V9khi8/view?usp=sharing"
              target="_blank"
            >
              <button className="px-3 py-2 bg-white text-[#0F1624] font-bold rounded-md flex items-center space-x-1 duration-300 ease-in-out hover:scale-110">
                <HiDocumentText className="text-xl" />
                <span>Resume</span>
              </button>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                scrollNavItemSmooth(e, "#contact");
              }}
            >
              <button className="px-3 py-2 bg-white text-[#0F1624] font-bold rounded-md flex items-center space-x-1 duration-300 ease-in-out hover:scale-110">
                <BiCodeAlt className="text-xl" />
                <span>Hire Me</span>
              </button>
            </a>
          </div>
          <div className="sm:flex justify-center space-x-6 text-2xl my-3 hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
