import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import React, { FC } from "react";

const PageWrapper: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
