import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
const LogInFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passType, setPassType] = useState("password");
  const changePassType = () =>
    setPassType((passType) => (passType === "password" ? "text" : "password"));

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="form-control w-full max-w-xs">
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
            className="input input-bordered w-full max-w-xs"
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

        {/* Password */}
        <div className="form-control w-full max-w-xs relative">
          <label className="label">
            <span className="label-text">What is Your Password?</span>
          </label>
          <input
            type={passType}
            placeholder="Your password"
            {...register("password", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
          <div className="absolute mt-[50px] ml-[285px]">
            {!(passType === "password") ? (
              <BsFillEyeFill
                onClick={changePassType}
                className="cursor-pointer"
              />
            ) : (
              <BsFillEyeSlashFill
                onClick={changePassType}
                className="cursor-pointer"
              />
            )}
          </div>

          {/* errors will return when field validation fails  */}
          {errors.password && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                Password is required
              </span>
            </label>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-outline mt-4 w-full max-w-xs"
          value="Log In"
        />
      </form>
    </>
  );
};

export default LogInFrom;
