import React from "react";
import {
  BsPlayCircle,
  BsThreeDotsVertical,
  BsPlayCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { hero1, hero2 } from "./dummyData/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className=" absolute top-[50%] left-0 text-white cursor-pointer"
    >
      <BsFillArrowLeftCircleFill size={50} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className=" absolute top-[50%] right-0 z-10 text-white cursor-pointer"
    >
      <BsFillArrowRightCircleFill size={50} />
    </div>
  );
}

export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="hero">
        <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between">
          <div className=" w-full h-full md:w-1/2">
            <Slider {...settings}>
              {hero1.map((item) => (
                <div className=" box relative h-[92vh] sm:mt-16 w-full">
                  <img
                    src={item.cover}
                    alt=""
                    className=" w-full h-full object-cover"
                  />
                  <div className="text absolute top-0 left-0 text-white p-5">
                    <h3 className=" text-xl font-semibold capitalize">
                      {item.name}
                    </h3>
                    <span className=" text-gray-400 capitalize">
                      {item.tag}
                    </span>
                  </div>

                  <div className=" overlay icon absolute top-1/2 left-[40%] text-white">
                    <BsPlayCircle size={45} className="show" />
                    <BsPlayCircleFill
                      size={45}
                      className="hide absolute -top-0 -left-0"
                    />
                  </div>

                  <div className="overlay absolute bottom-0 right-0 text-white">
                    <div className="flex p-3">
                      <AiFillHeart size={22} className=" mx-3" />
                      <BsThreeDotsVertical size={22} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className=" w-full h-full md:w-1/2 grid grid-cols-2 sm:grid-cols-1">
            {hero2.map((item) => (
              <div className="box relative">
                <img
                  src={item.cover}
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <div className="text absolute top-0 left-0 text-white p-5">
                  <h3 className=" text-xl font-semibold capitalize">
                    {item.name}
                  </h3>
                  <span className=" text-gray-400 capitalize">{item.tag}</span>
                </div>

                <div className=" overlay icon absolute top-1/2 left-[40%] text-white">
                  <BsPlayCircle size={45} className="show" />
                  <BsPlayCircleFill
                    size={45}
                    className="hide absolute -top-0 -left-0"
                  />
                </div>

                <div className="overlay absolute bottom-0 right-0 text-white">
                  <div className="flex p-3">
                    <AiFillHeart size={22} className=" mx-3" />
                    <BsThreeDotsVertical size={22} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
