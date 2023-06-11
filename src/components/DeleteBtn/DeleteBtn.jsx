/* eslint-disable react/prop-types */
import { useState } from "react";
import DisplayCenter from "../DisplayCenter/DisplayCenter";

const DeleteBtn = ({ fnc }) => {
  const [delToggle, setDelToggle] = useState(false);
  const modalToggle = () => {
    setDelToggle((pre) => !pre);
  };
  const handleConfirm = () => {
    modalToggle();
    fnc();
  };
  return (
    <>
      <button onClick={modalToggle} className="btn btn-secondary">
        Delete
      </button>
      {delToggle && (
        <div className="backdrop-blur-md flex items-center justify-center w-full h-screen fixed z-50 top-0 left-0 ">
          <DisplayCenter>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Are You Sure?</h2>
                <p>You can find this data in trash</p>
                <div className="card-actions justify-end">
                  <button onClick={modalToggle} className="btn btn-primary">
                    Cancel
                  </button>
                  <button onClick={handleConfirm} className="btn btn-secondary">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </DisplayCenter>
        </div>
      )}
    </>
  );
};

export default DeleteBtn;
