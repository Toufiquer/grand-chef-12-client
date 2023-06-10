const Loading = () => {
  return (
    <>
      <div className="backdrop-blur-md flex items-center justify-center w-full h-screen fixed z-50 top-0 left-0 ">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </>
  );
};

export default Loading;
