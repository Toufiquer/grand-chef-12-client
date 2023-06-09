/* eslint-disable react/prop-types */

import Nav from "../../components/Nav/Nav";

const Main = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Main;
