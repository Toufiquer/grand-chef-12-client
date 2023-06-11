/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import { useDeleteUserMutation } from "../../redux/features/users/usersApi";
import { useEffect } from "react";
import swal from "sweetalert";

const ClassesItem = ({ user }) => {
  const { _id, userName, email, role } = user || {};

  const [deleteUser, { isSuccess, isError, error, isLoading }] =
    useDeleteUserMutation();
  useEffect(() => {
    isSuccess &&
      swal({
        title: "User is successfully deleted",
        text: error,
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
    isError &&
      swal({
        title: "Error Occurred",
        text: error,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
  }, [isSuccess, isError, error]);
  const deleteFnc = () => {
    deleteUser(_id);
  };
  return (
    <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="px-2">
          <strong>Name:</strong> {userName}
        </h2>
        <h2 className="px-2">
          <strong>Email:</strong> {<span>{email}</span>}
        </h2>
        <h2 className="px-2">
          <strong>Role:</strong> {<span>{role}</span>}
        </h2>
      </div>
      <div className="flex gap-4">
        {/* If someone confirm then invoke the function */}
        <DeleteBtn fnc={deleteFnc} isLoading={isLoading} />
        <Link to="/payment/:email" className="btn btn-accent">
          Payment
        </Link>
      </div>
    </div>
  );
};

export default ClassesItem;
