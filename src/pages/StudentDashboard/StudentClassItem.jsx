/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../../redux/features/users/usersApi";
import { useEffect } from "react";
import swal from "sweetalert";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";
const StudentClassItem = ({ data }) => {
  console.log(data);
  const {
    _id,
    email,
    payment = false,
    className,
    instructorName,
    photoUrl,
    price,
  } = data || {};

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
  const handleUserMutation = () => {};
  return (
    <div className="border border-solid border-current rounded-lg px-4 py-2 mb-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="px-2">
                <strong> Class name:</strong> {"userName"}
              </h2>
              <h2 className="px-2">
                <strong>Instructor name:</strong> {<span>{"email"}</span>},{" "}
                <strong>Instructor email:</strong> {<span>{"role"}</span>}
              </h2>
              <h2 className="px-2">
                <strong> Available seats:</strong> {<span>{"role"}</span>},{" "}
                <strong> Price:</strong> {<span>{"role"}</span>}
              </h2>
            </div>
          </div>
          <div className="flex gap-4">
            {/* If someone confirm then invoke the function */}
            <DeleteBtn fnc={deleteFnc} isLoading={isLoading} />

            {payment ? (
              <Link to="/Classes/Enrolled/:id" className="btn btn-accent">
                Class Video
              </Link>
            ) : (
              <Link to="/payment/:email" className="btn btn-accent">
                Payment
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <hr className="my-2" />
        <h2 className="px-2">
          <strong> Class Summary:</strong> Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Odit veritatis voluptas possimus numquam
          deserunt ipsam commodi. Dolor distinctio aliquam voluptatibus,
          voluptas similique, nemo facilis vel, quisquam nobis iure ut fuga?
        </h2>
      </div>
    </div>
  );
};

export default StudentClassItem;
