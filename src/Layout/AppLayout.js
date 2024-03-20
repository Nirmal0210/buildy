import React from "react";
import Footer from "./Footer";
import RouterLayout from "./RouterLayout";
import Header from "./Header";

const AppLayout = ({ themeToggler, theme }) => {
  return (
    <>
      <Header themeToggler={themeToggler} theme={theme} />
      <RouterLayout />
      <Footer />
    </>
  );
};

export default AppLayout;
