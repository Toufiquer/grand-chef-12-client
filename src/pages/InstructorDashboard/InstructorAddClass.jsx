import { useForm } from "react-hook-form";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { BsStar } from "react-icons/bs";

const InstructorAddClass = () => {
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
          <div className="flex flex-col">
            <h2 className="text-center my-2 text-4xl font-thin">
              {" "}
              Instructor Add Class
            </h2>
            <div className="divider">
              <BsStar />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*  Name */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  placeholder="Class Name"
                  {...register("name", {
                    required: true,
                  })}
                  className="input input-bordered w-fullw-full"
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
              {/* Email */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">What is Your Email?</span>
                </label>
                <input
                  placeholder="Your Email"
                  readOnly
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
                  })}
                  className="input input-bordered w-fullw-full"
                />

                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      Email is required
                    </span>
                  </label>
                )}
              </div>{" "}
              {/* Instructor name */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">What is Your Email?</span>
                </label>
                <input
                  placeholder="Your name"
                  readOnly
                  {...register("inName", {
                    required: true,
                  })}
                  className="input input-bordered w-fullw-full"
                />
              </div>
              {/* Photo URL */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">Your Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Your Photo URL"
                  {...register("photoUrl", {
                    required: true,
                  })}
                  className="input input-bordered w-fullw-full"
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
              {/* Gender */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  {...register("gender")}
                  className="input input-bordered w-fullw-full  pr-2"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Phone Number */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  {...register("phNumber")}
                  className="input input-bordered w-fullw-full"
                />
              </div>{" "}
              {/* Price*/}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  {...register("price")}
                  className="input input-bordered w-fullw-full"
                />
              </div>
              {/* Address */}
              <div className="form-control w-fullw-full">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="textArea"
                  placeholder="Your Address"
                  {...register("address")}
                  className="input input-bordered w-fullw-full"
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

export default InstructorAddClass;
