/* eslint-disable react/prop-types */

import Divider from "../../components/Divider/Divider";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const Main = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Divider /> {/** Divider */}
      <Footer />
    </>
  );
};

export default Main;
