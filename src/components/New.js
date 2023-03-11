import React from "react";
import { CardLg } from "../common/CardLg";
import { Title } from "../common/Title";
import { recommend } from "./dummyData/data";

export const New = () => {
  return (
    <>
      <section className="treading hero">
        <Title title="New" />

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
