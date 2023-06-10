import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { auth } from "../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../pages/Loading/Loading";
import { useEffect, useState } from "react";
import useGetJwt from "../../hooks/useGetJwt";
import { useNavigate } from "react-router-dom";
const SocialLogIn = () => {
  const [errMsg, setErrMsg] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (error) {
      setErrMsg(error?.message);
    }
  }, [error]);
  const isLoading = useGetJwt(user, "Logged In Successful");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading) {
      navigate("/");
    }
  }, [isLoading, navigate]);
  if (loading && !error) {
    // useEffect(() => {
    //   if (user) {
    //     fetch("http://localhost:5000/jwt", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ email: user.user.email }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         localStorage.setItem("Token", JSON.stringify(data.result.token));
    //         swal("Good job!", "Logged In", "successful");
    //       });
    //   }
    // }, [user]);
    return <Loading />;
  }
  return (
    <div className="flex gap-2 flex-col">
      {errMsg.length >= 3 && (
        <span className="label-text-alt text-red-500">{errMsg}</span>
      )}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline mt-4 w-full min-w-[350px]"
      >
        <BsGoogle /> Google
      </button>
      <button disabled className="btn btn-outline mt-4 w-full min-w-[350px]">
        <BsFacebook /> FaceBook
      </button>
      <button disabled className="btn btn-outline mt-4 w-full min-w-[350px]">
        <BsGithub /> GitHub
      </button>
    </div>
  );
};

export default SocialLogIn;
