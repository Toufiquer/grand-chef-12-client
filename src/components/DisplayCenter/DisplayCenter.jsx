/* eslint-disable react/prop-types */
const DisplayCenter = ({ children, border = true }) => {
  const styleBorder = `${
    border && "border border-solid border-current rounded-lg p-4"
  } flex items-center justify-center w-full h-screen `;
  return <div className={styleBorder}>{children}</div>;
};

export default DisplayCenter;
