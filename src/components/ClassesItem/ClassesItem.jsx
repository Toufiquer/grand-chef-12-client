/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/DeleteBtn";

const ClassesItem = ({ user }) => {
  const { _id, userName, email, role } = user || {};
  const deleteFnc = () => {
    console.log("delete", _id);
  };
  return (
    <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
      <h2 className="px-2">
        <strong>Name:</strong> {userName}
      </h2>
      <h2 className="px-2">
        <strong>Email:</strong> {<span>{email}</span>}
      </h2>
      <h2 className="px-2">
        <strong>Role:</strong> {<span>{role}</span>}
      </h2>
      <div className="flex gap-4">
        {/* If someone confirm then invoke the function */}
        <DeleteBtn fnc={deleteFnc} />
        <Link to="/payment/:email" className="btn btn-accent">
          Payment
        </Link>
      </div>
    </div>
  );
};

export default ClassesItem;
