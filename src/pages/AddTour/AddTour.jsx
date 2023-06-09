import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";

import { useForm } from "react-hook-form";
const AddTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <DisplayCenter>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4">
        {/* Email */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is Your Email?</span>
          </label>
          <input
            placeholder="Your Email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
            })}
            className="input input-bordered w-full "
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
        {/* Email */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is Your Email?</span>
          </label>
          <input
            placeholder="Your Email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
            })}
            className="input input-bordered w-full "
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
        <input
          type="submit"
          className="btn btn-outline mt-4 w-full "
          value="Submit"
        />
      </form>
    </DisplayCenter>
  );
};

export default AddTour;
