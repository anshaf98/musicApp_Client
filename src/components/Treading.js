import React from "react";
import { CardLg } from "../common/CardLg";
import { Title } from "../common/Title";
import { recommend } from "./dummyData/data";
import Slider from "react-slick";

export const Treading = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="treading hero">
        <Title title="Treading" />

        <Slider {...settings}>
          {recommend.map((item, i) => (
            <div className="box card m-5" key={i}>
              <div className="mr-5">
                <CardLg cover={item.cover} name={item.name} tag={item.tag} />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
