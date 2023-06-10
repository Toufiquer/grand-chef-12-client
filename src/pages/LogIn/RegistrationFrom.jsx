/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import LogInRegistrationToggle from "./LogInRegistrationToggle";
import { auth } from "../../firebase";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import swal from "sweetalert";

const RegistrationFrom = ({ isLogInPage, logInRegistrationToggle }) => {
  const [passErr, setPassErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passType, setPassType] = useState("password");

  if ((loading || updating) && !(error || UpdateError)) {
    return <Loading />;
  }
  if (!(loading || updating) && (error || UpdateError)) {
    setErrMsg(error?.message || UpdateError?.message);
  }
  const changePassType = () =>
    setPassType((passType) => (passType === "password" ? "text" : "password"));

  const onSubmit = (data) => {
    if (data.pass !== data.conPass) {
      setPassErr(true);
    } else {
      setPassErr(false);
      const userData = {
        gender: data.gender,
        phNumber: data.phNumber,
        address: data.address,
      };
      const runFn = async () => {
        const isCreate = await createUserWithEmailAndPassword(
          data.email,
          data.pass
        );
        if (isCreate && user) {
          const success = await updateProfile({
            ...userData,
            displayName: data.name,
            photoURL: data.photoUrl,
          });
          if (success) {
            swal("Good job!", "You clicked the button!", "success");
          }
        }
      };
      runFn();
      console.log(userData);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            placeholder="Your name"
            {...register("name", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
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
            <span className="label-text">Password</span>
          </label>
          <input
            type={passType}
            placeholder="Your password"
            {...register("pass", { required: true })}
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
        </div>{" "}
        {/* Confirm Password */}
        <div className="form-control w-full max-w-xs relative">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type={passType}
            placeholder="Confirm  password"
            {...register("conPass", { required: true })}
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
                Confirm Password is required
              </span>
            </label>
          )}
        </div>
        {/* If password is not match */}
        {passErr && (
          <span className="label-text-alt text-red-500">
            Password does not match
          </span>
        )}
        {/* Photo URL */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Your Photo URL"
            {...register("photoUrl", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            {...register("gender")}
            className="input input-bordered w-full max-w-xs  pr-2"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Phone Number */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Your Phone Number"
            {...register("phNumber")}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Address */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <textarea
            type="textArea"
            placeholder="Your Address"
            {...register("address")}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Link to Lon In */}
        <LogInRegistrationToggle
          isLogInPage={isLogInPage}
          logInRegistrationToggle={logInRegistrationToggle}
        />
        {errMsg.length >= 3 && (
          <span className="label-text-alt text-red-500">{errMsg}</span>
        )}
        <input
          type="submit"
          className="btn btn-outline mt-4 w-full max-w-xs"
          value="Registration"
        />
      </form>
    </>
  );
};

export default RegistrationFrom;
