import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import { useForm } from "react-hook-form";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto  border border-solid border-current rounded-lg p-4">
      <div className="w-full TR-custom-flex">
        <DisplayCenter border={false}>
          {/* Log in form */}
          <div className="p2 border border-solid border-current rounded-lg p-4 min-w-[380px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* include validation with required or other standard HTML validation rules */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  {...register("exampleRequired", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">
                      This field is required
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
          </div>
        </DisplayCenter>
        <div className="divider divider-horizontal TR-object-divider-horizontal">
          OR
        </div>
        <div className="divider divider-vertical TR-object-divider-vertical">
          OR
        </div>

        <DisplayCenter border={false}>
          {/* Social Log In */}
          <>
            <SocialLogIn />
          </>
        </DisplayCenter>
      </div>
    </div>
  );
};

export default LogIn;
