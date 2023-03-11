import React from "react";
import { CardSm } from "../common/CardSm";
import { recommend } from "./dummyData/data";

export const Chart = () => {
  return (
    <>
      <section className="treading hero mt-8 sm:mt-20">
        <h1 className=" text-5xl font-bold mb-5 text-primary">Charts</h1>
        <div className="grid grid-cols-1 gap-5">
          {recommend.map((item, i) => (
            <div className="box card hero" key={i}>
              <div className="mr-5">
                <CardSm
                  cover={item.cover}
                  name={item.name}
                  tag={item.tag}
                  show={true}
                  i={i}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
