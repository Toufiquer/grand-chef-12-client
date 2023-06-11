/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import ClassesItem from "../../components/ClassesItem/ClassesItem";
import { useGetUsersQuery } from "../../redux/features/users/usersApi";
import Loading from "../Loading/Loading";

const AdminManageUsers = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();
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
  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <div className="flex flex-col gap-2">
        {data.map((curr) => (
          <ClassesItem key={curr._id} user={curr} />
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
};

export default AdminManageUsers;
