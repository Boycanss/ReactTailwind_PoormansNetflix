import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { ThemeWrapper } from "../Wrapper";
import { Footer } from "./Footer";

export const Layout = (props) => {
  return (
    <ThemeWrapper>
      <Navbar />
      {props.children}
      <Footer />
    </ThemeWrapper>
  );
};
