/* eslint-disable react/prop-types */
const DisplayCenter = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      {children}
    </div>
  );
};

export default DisplayCenter;
