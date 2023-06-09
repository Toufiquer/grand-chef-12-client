import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
const SocialLogIn = () => {
  return (
    <div className="flex gap-2 flex-col">
      <button className="btn btn-outline mt-4 w-full min-w-[350px]">
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
