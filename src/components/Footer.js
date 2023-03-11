import React from "react";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { TiArrowShuffle } from "react-icons/ti";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { FaVolumeUp } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-700 fixed bottom-0 w-full text-white">
        <div className="flex justify-center md:justify-between items-center h-16">
          <div className="img md:flex items-center md:visible hidden">
            <img
              src="https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" w-16 h-16 object-cover mr-5"
            />

            <h3>Pull Up</h3>
            <AiOutlineHeart size={20} className=" ml-32" />
          </div>

          <div className="flex items-center">
            <TiArrowShuffle className=" text-gray-400 mr-5" />
            <BiSkipPrevious size={30} />
            <BsPlayCircleFill size={40} className=" text-primary mx-5" />
            <BiSkipNext size={30} />
            <FiRepeat className=" text-gray-400 ml-5" />
          </div>

          <div className="md:flex items-center mx-5 md:visible hidden">
            <p className=" text-gray-400 text-sm">00:00 / 00:02</p>
            <FaVolumeUp className="mx-8" />
            <AiOutlineMenu />
          </div>
        </div>
      </footer>
    </>
  );
};
