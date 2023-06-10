import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { auth } from "../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../pages/Loading/Loading";
import { useEffect, useState } from "react";
const SocialLogIn = () => {
  const [errMsg, setErrMsg] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (error) {
      setErrMsg(error?.message);
    }
  }, [error]);
  if (loading && !error) {
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
      <button className="btn btn-outline mt-4 w-full min-w-[350px]">
        <BsFacebook /> FaceBook
      </button>
      <button className="btn btn-outline mt-4 w-full min-w-[350px]">
        <BsGithub /> GitHub
      </button>
    </div>
  );
};

export default SocialLogIn;
