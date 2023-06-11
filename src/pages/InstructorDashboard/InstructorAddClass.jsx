import { useForm } from "react-hook-form";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { BsStar } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useAddClassMutation } from "../../redux/features/classes/classesApi";

import swal from "sweetalert";
import { useEffect } from "react";
const InstructorAddClass = () => {
  const [user, ,] = useAuthState(auth);
  const [addVideo, { isSuccess, isLoading, isError, error }] =
    useAddClassMutation();

  useEffect(() => {
    isSuccess &&
      swal({
        title: "Class added successfully",
        text: error,
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
    isError &&
      swal({
        title: "Ops! something went wrong",
        text: error,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
  }, [isError, isSuccess, error]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addVideo(data);
  };
  return (
    <div>
      <DisplayCenter>
        <>
          <div className="flex flex-col w-full">
            <h2 className="text-center my-2 text-4xl font-thin">
              {" "}
              Instructor Add Class
              <br />
              <small className="text-sm text-center">For Students</small>
            </h2>
            <div className="divider">
              <BsStar />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              {/* Class Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  placeholder="Class Name"
                  {...register("className", {
                    required: true,
                  })}
                  className="input input-bordered w-full"
                />

                {/* errors will return when field validation fails  */}
                {errors.name && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      Name is required
                    </span>
                  </label>
                )}
              </div>
              {/* Photo URL */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Class Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Class Photo URL"
                  {...register("photoUrl", {
                    required: true,
                  })}
                  className="input input-bordered w-full"
                />

                {/* errors will return when field validation fails  */}
                {errors.photoURl && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      Photo URL is required
                    </span>
                  </label>
                )}
              </div>
              {/* Instructor name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Instructor name</span>
                </label>
                <input
                  placeholder="Instructor name"
                  readOnly
                  {...register("instructorName", {
                    required: true,
                  })}
                  value={user?.displayName || ""}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Instructor Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  placeholder="Instructor Email"
                  readOnly
                  {...register("email", {
                    required: true,
                  })}
                  value={user?.email || ""}
                  className="input input-bordered w-full"
                />

                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      Email is required
                    </span>
                  </label>
                )}
              </div>
              {/* Available Seats  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Seats"
                  {...register("seats")}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Price*/}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Class Price"
                  {...register("price")}
                  className="input input-bordered w-full"
                />
              </div>
              <input
                disabled={isLoading}
                type="submit"
                className="btn btn-outline mt-4 w-full"
                value="Add Class"
              />
            </form>
          </div>
        </>
      </DisplayCenter>
    </div>
  );
};

export default InstructorAddClass;
