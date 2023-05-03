import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
     <Header />
      <div className="bg-[black] w-[100%]  text-[white] md:p-[24px] ">
        <div className="w-[100%] flex justify-center items-start p-[23px] flex-col ">
          <span className="text-5xl font-serif ">Who We Are?</span>
          <p className="mt-3 text-xl font-sen sm:p-3 p-1">
          Network Marketing is a young emerging firm in the global market
            providing independent platform for emerging leaders for the field of
            service and management in this competitive market. Network Marketing
             is one of the largest face to face advertising company
            working with multiple clients from the fortune 500 companies. We are
            part of Global network where already we have office in 32 country
            with more than 1200 offices around the world. Now we are looking for
            expansion in all across Tamilnadu and Kerala. We are a dynamic team
            of creatives comprised of marketing, Communications specialists and
            business development professionals. We provide global platform to
            ambitious leaders in the diverse and competitive Indian market in
            the field of service and management looking for a partner in
            branding/promotions, client servicing, advertising and
            communications requirements. The important word in the last is
            “partner” We work with you, for you.
          </p>
          <span className="text-4xl font-serif ">Our Vision</span>
          <p className="mt-3 text-xl font-sen p-3 ">
            Our vision is to inspire our employees to be the best they can be.
            In future, we are overseeing expansion in more cities and new
            divisions with new clients to maximize the growth opportunities for
            our people.
          </p>
          <span className="text-4xl font-serif ">Our Mission</span>
          <p className="mt-3 sm:text-xl font-sen p-3">
            Our Mission is to be the pre-eminent face to face marketing
            organization in world wide.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-normal p-3 ">Business Head</h1>
      <div className="grid sm:grid-cols-2 p-2  ">
        <img
          className=" shadow-lg   grid row-span-2 md:h-[600px] md:w-[100%]  object-contain h-[100%]  object-cover"
          src="./image/sonu.jpg"
          alt="sonu"
        />
        <span className="md:text-2xl text-lg font-normal font-serif text-[gray] p-2">
          {" "}
          Managing Director : MR SONU VERMA
        </span>
        <p className="p-3 text-lg font-sen md:text-2xl md:text-center ">
          After completing my BTech CSE was looking for a career where I can live
          the life the way I wanted to live.I answer an add from TIMES JOBS and
          got opportunity to build my career. During this journey have gone
          through lot many challenges .Being a north Indian it took little while
          to understand the culture and environment. Eventhough I take it as a
          challenge and proved myself. By following the system of the company I
          developed my skills by working hard which helped me to run a
          successful business unit in Trichy and looking for expansion in all
          across Tamilnadu where i can provide this opportunity to more leader
          who can use this opportunity to build there carrier i believe
          everything is possible to achieve in life if u keep trying until you
          achieve .
        </p>
        <div className="w-[100%]  mt-4 flex sm:flex-row justify-center items-center flex-wrap">
          <h3 className=" text-3xl font-normal font-serif text-center">
            Our Core Leader's
          </h3>
        </div>
      </div>
      <div className="w-[100%] mt-4 flex sm:flex-row justify-center items-center flex-wrap flex-col  ">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}  className="w-[270px]  p-3 shadow-lg m-2 text-center ">
          <div className="w-[100%]  object-cover  ">
            <img
              className="w-[270px] h-[300px] object-cover rounded-lg  "
              src="/image/ceo.jpg"
              alt="leo"
            />
          </div>
          <h5>MR SHAHBAZ Warish</h5>
          <p>CEO</p>
        </motion.div>
        <motion.div
          className="w-[270px]  p-3 shadow-lg m-2 text-center   "
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        >
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/leo.png"
            alt="leo"
          />
          <h5>MR Audesh Shukla</h5>
          <p>Chief Technology Officer</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[270px]  p-3 shadow-lg m-2 text-center  ">
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/cto.jpeg"
            alt="leo"
          />
          <h5>MR Aman Kumar</h5>
          <p>Chief Marketing Officer</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[270px]  p-3 shadow-lg m-2 text-center">
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/employee3.jpg"
            alt="leo"
          />
          <h5>MR Jamuna Prasad </h5>
          <p>Chief Financial Officer</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[250px]   p-3 shadow-lg m-2 text-center ">
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/employee4.jpg"
            alt="leo"
          />
          <h5>MRS Abinaya K</h5>
          <p>General Manager</p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
