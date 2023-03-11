import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className=" mt-[4%]">{children}</main>
      <Footer />
    </>
  );
};
