import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

const DefaultLayout = ({children}) => {
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className=" flex">
          <Sidebar />
          <div className="  mt-[56px]">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default DefaultLayout;
