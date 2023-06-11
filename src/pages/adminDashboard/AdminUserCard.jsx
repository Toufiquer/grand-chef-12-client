/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../redux/features/users/usersApi";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";
import AdminChangeRoleBtn from "./AdminChangeRoleBtn";

const AdminUserCard = ({ user }) => {
  const { _id, userName, email, role } = user || {};

  const [filterUsers, setFilter] = useState("student");
  const [deleteUser, { isSuccess, isError, error, isLoading }] =
    useDeleteUserMutation();
  const [
    updateVideo,
    {
      isSuccess: isSuccess2,
      isLoading: isLoading2,
      isError: isError2,
      error: error2,
    },
  ] = useUpdateUserMutation();
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
  useEffect(() => {
    isSuccess2 &&
      swal({
        title: "User is successfully Updated",
        text: error2,
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
    isError2 &&
      swal({
        title: "Error Occurred",
        text: error2,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
  }, [isSuccess2, isError2, error2]);
  const deleteFnc = () => {
    deleteUser(_id);
  };
  const handleUserMutation = () => {
    console.log(filterUsers, _id);
    const data = { ...user, role: filterUsers };
    updateVideo({ id: _id, data });
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
        <ConfirmBtn
          fnc={handleUserMutation}
          otherData={
            <AdminChangeRoleBtn
              filterUsers={filterUsers}
              setFilter={setFilter}
            />
          }
          name="Change Role"
        />
        {/* <<button className="btn btn-accent">Change Role</button>> */}
      </div>
    </div>
  );
};

export default AdminUserCard;
