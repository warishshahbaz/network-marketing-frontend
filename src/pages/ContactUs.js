import { Button, TextField } from "@mui/material";

import React from "react";
import { GoLocation } from "react-icons/go";
import { FcPhone } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import Header from "../components/Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
    <Header />
      <div className="w-[100%] h-[30vh] bg-[black] p-5 flex justify-center items-start flex-col text-[white] ">
        <p className="p-2 text-4xl font-normal hover:text-[green] ">Connect</p>
        <h2 className="px-5 text-3xl font-normal">
          We’d love to hear from you, get in touch with us
        </h2>
      </div>
      <h2 className="sm:text-5xl text-xl p-3 capitalize ">
        Let's work together and make something that matters.
      </h2>

      <div className=" flex justify-center p-3 ">
        <div className="flex sm:flex-row flex-col w-[100%] ">
          <div className="flex w-[100%]  sm:flex-row flex-col justify-around items-center">
            <span>
              <span>
                <GoLocation className="text-2xl" />
              </span>
              <p className="sm:text-xl">Network Marketing,Thamara tower</p>
              <p className="sm:text-xl">3rd floor above hdfc bank</p>
              <p className="sm:text-xl">
                Srinivasan nagar Vayaloor main road Trichy – 620017.
              </p>
            </span>
            <div>
              <span>
                <FcPhone className="text-2xl" />
              </span>
              <p className="sm:text-xl">+91 38483764763</p>
              <p className="sm:text-xl">+91 89273646654</p>
            </div>
            <div>
              <span>
                <GrMail className="text-2xl" />
              </span>
              <p className="sm:text-xl">abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[60vh] mt-1 shadow-lg ">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15555.80884571165!2d77.59631594999999!3d12.91079305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681648479855!5m2!1sen!2sin" 
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
