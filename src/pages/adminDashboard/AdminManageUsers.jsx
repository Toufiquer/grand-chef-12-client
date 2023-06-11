/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import { useGetUsersQuery } from "../../redux/features/users/usersApi";
import Loading from "../Loading/Loading";
import { useState } from "react";
import AdminUserCard from "./AdminUserCard";

const AdminManageUsers = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();
  const [filterUsers, setFilter] = useState("allUsers");
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    swal({
      title: "Error Occurred",
      text: error,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <h2>Ops! Nothing was Found.</h2>;
  }
  console.log("page content", data);
  let findCount = 0;
  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <div className="flex flex-col gap-2">
        {
          (findCount = data
            .filter((curr) => {
              if (
                filterUsers === "student" ||
                filterUsers === "admin" ||
                filterUsers === "instructor"
              ) {
                console.log(curr);
                return curr.role === filterUsers;
              } else {
                return true;
              }
            })
            .map((curr) => <AdminUserCard key={curr._id} user={curr} />))
        }
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="mb-2 sticky top-0 backdrop-blur-lg">
        <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="px-2">
              <strong>Total Users:</strong> {data?.length || 0}
            </h2>
            <h2 className="px-2">
              <strong>Found:</strong> {findCount?.length || 0} user
              {findCount.length <= 1 ? "" : "s"}
            </h2>
          </div>
          <div className="flex gap-4">
            <div
              onClick={() => setFilter("allUsers")}
              className={`btn btn-outline ${
                filterUsers === "allUsers" && "bg-slate-400 text-gray-800"
              }`}
            >
              ALL Users
            </div>
            <div
              onClick={() => setFilter("student")}
              className={`btn btn-outline ${
                filterUsers === "student" && "bg-slate-400 text-gray-800"
              }`}
            >
              Students
            </div>
            <div
              onClick={() => setFilter("admin")}
              className={`btn btn-outline ${
                filterUsers === "admin" && "bg-slate-400 text-gray-800"
              }`}
            >
              Admin
            </div>
            <div
              onClick={() => setFilter("instructor")}
              className={`btn btn-outline ${
                filterUsers === "instructor" && "bg-slate-400 text-gray-800"
              }`}
            >
              Instructor
            </div>
          </div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AdminManageUsers;
