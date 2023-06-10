/* eslint-disable react/prop-types */

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const Main = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Main;
