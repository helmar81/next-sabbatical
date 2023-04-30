import React, { PropsWithChildren } from "react";
import  Navbar  from "./Navbar";

import Header from "../components/Header"
import Footer from "./Footer";
import { useRouter } from "next/router"


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
  <Header />

  
      {children}
    </>


  );
};
export default Layout;


