import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useGetUserQuery } from "../redux/features/users/usersApi";
const useGetJwt = (user, message) => {
  const [isLoading, setIsLoading] = useState(true);
  // if user logged in then fetch the user data
  const [invoke, setInvoke] = useState(true);

  useGetUserQuery(user?.user?.email, { skip: invoke });
  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("Token", JSON.stringify(data.result.token));
          swal("Good job!", message, "successful");
          setInvoke(false);
          setIsLoading(false);
        });
    }
  }, [user, message, setInvoke]);
  return isLoading;
};

export default useGetJwt;
