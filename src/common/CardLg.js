import React from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  BsPlayCircle,
  BsPlayCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

export const CardLg = ({ cover, name, tag }) => {
  return (
    <>
      <div className="img relative h-72">
        <img
          src={cover}
          alt=""
          className=" w-full h-full object-cover rounded-md"
        />
        <div className="overlay icon absolute top-1/2 left-[40%] text-white">
          <BsPlayCircle size={45} className="show" />
          <BsPlayCircleFill
            size={45}
            className="hide absolute -top-0 -left-0"
          />
        </div>
      </div>
      <div className="overlay absolute bottom-0 right-0 text-secondary">
        <div className="flex p-3">
          <AiFillHeart size={22} className=" mx-3" />
          <BsThreeDotsVertical size={22} />
        </div>
      </div>
      <div className="text ">
        <h3 className=" text-md text-gray-500 font-semibold capitalize">
          {name}
        </h3>
        <span className=" text-gray-400 capitalize">{tag}</span>
      </div>
    </>
  );
};
