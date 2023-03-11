import React from "react";
import { CardSm } from "../common/CardSm";
import { Title } from "../common/Title";
import { recommend } from "./dummyData/data";

export const Recommand = () => {
  return (
    <>
      <section className="treading hero mt-7 pb-32">
        <Title title="Recommand for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recommend.map((item, i) => (
            <div className="box card hero" key={i}>
              <div className="mr-5">
                <CardSm cover={item.cover} name={item.name} tag={item.tag} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
