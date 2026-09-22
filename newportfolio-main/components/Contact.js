import { sectionHeading } from "@/shared/SharedComponents";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaDev } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {sectionHeading("Hire Me", "Get in touch")}
      <div className="sm:flex mt-6">
        <div className="sm:w-2/3 leading-relaxed pr-0 sm:pr-20">
          I'm interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to contact.
        </div>
        <div className="sm:w-1/3 my-4 sm:my-0">
          <h3 className="text-lg font-semibold tracking-widest">SAY HELLO</h3>
          <div className="flex items-center space-x-5">
            <span>Mail to me at :</span>
            <a
              href="mailto:tarunsdhanak@gmail.com"
              className="hover:scale-150 duration-200 text-2xl "
            >
              <IoMdMail />
            </a>
          </div>
        </div>
      </div>
      <div className="flex text-2xl space-x-6 justify-center mt-10 mb-6 flex-wrap">
        <a
          href="https://github.com/tarun-duh"
          target="_blank"
          className="hover:scale-150 duration-200"
        >
          <BsGithub />
        </a>
        <a
          target="_blank"
          href="https://www.upwork.com/freelancers/~01dfd74b07d71ad171"
          className="hover:scale-150 duration-200"
        >
          <SiUpwork />
        </a>
        <a
          href="https://www.linkedin.com/in/tarun-duh/"
          target="_blank"
          className="hover:scale-150 duration-200"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          href="https://dev.to/tarun_duh"
          className="hover:scale-150 duration-200"
        >
          <FaDev />
        </a>
      </div>
      <div className="h-[0.5px] w-1/2 sm:w-1/5 bg-white mx-auto"></div>
      <div className="text-center mt-4">Built with 💙 by Tarun Singh</div>
    </div>
  );
};

export default Contact;
