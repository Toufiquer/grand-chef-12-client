/* eslint-disable react/prop-types */
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import swal from "sweetalert";
import { useGetUserQuery } from "../../redux/features/users/usersApi";
import { useEffect, useState } from "react";
import { useAddEnrolledClassMutation } from "../../redux/features/enrolledClasses/enrolledClassesApi";
const ClassesCard = ({ data }) => {
  const [invoke, setInvoke] = useState(true);
  const { className, email, instructorName, photoUrl, price, seats, _id } =
    data || {};
  const [user, ,] = useAuthState(auth);
  const { data: userData } = useGetUserQuery(user?.email, { skip: invoke });
  const [addEnrolledClass, { isLoading, isError, error, isSuccess }] =
    useAddEnrolledClassMutation();
  useEffect(() => {
    user?.displayName && setInvoke(false);
  }, [user]);
  useEffect(() => {
    isSuccess &&
      swal({
        title: "Class is successfully Add",
        text: "Please Pay For Enrollment || Go Dash Board for more information",
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
  const handleEnroll = () => {
    if (user?.displayName) {
      // logged in
      // save to db
      addEnrolledClass({ ...data, ...userData });
    } else {
      swal({
        title: "Error Occurred",
        text: "Please Log In first",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    }
  };
  return (
    <div>
      <div
        className={`card card-compact w-96 shadow-xl ${
          parseInt(seats) === 0 ? "  bg-red-600" : " bg-base-100"
        }`}
      >
        <figure>
          <img
            src={`${
              photoUrl ? photoUrl : "https://i.ibb.co/BsXpQ0z/sta-je-html.jpg"
            } `}
            alt={className}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>
            <strong>Instructor name: </strong> {instructorName}
          </p>
          <p>
            <strong>Email: </strong> {email}
          </p>
          <p>
            <strong>Available seats: </strong> {seats}
          </p>
          <p>
            <strong>Price: </strong> {price}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleEnroll}
              disabled={
                parseInt(seats) === 0 ||
                isLoading ||
                [("admin", "instructor")].includes(userData?.role)
              }
              className="btn btn-primary"
            >
              Enroll Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
