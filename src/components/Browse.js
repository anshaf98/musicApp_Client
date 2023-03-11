import React from "react";
import { CardLg } from "../common/CardLg";
import { recommend } from "./dummyData/data";

export const Browse = () => {
  return (
    <>
      <section className="treading hero mt-8 sm:mt-20">
        <h1 className=" text-5xl font-bold mb-5 text-primary">Browse</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-5">
          {recommend.map((item, i) => (
            <div className="box card hero" key={i}>
              <div className="mr-5">
                <CardLg cover={item.cover} name={item.name} tag={item.tag} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
