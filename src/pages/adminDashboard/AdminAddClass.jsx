import { useForm } from "react-hook-form";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { BsStar } from "react-icons/bs";

const AdminAddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <DisplayCenter>
        <>
          <div className="flex flex-col w-full">
            <h2 className="text-center my-2 text-4xl font-thin">
              {" "}
              Admin Add Class
              <br />
              <small className="text-sm text-center">For Instructor</small>
            </h2>
            <div className="divider">
              <BsStar />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Class Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  placeholder="Class Name"
                  {...register("name", {
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
                  {...register("inName", {
                    required: true,
                  })}
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
                    pattern:
                      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
                  })}
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

export default AdminAddClass;
