import { useEffect, useState } from "react";
import swal from "sweetalert";
const useGetJwt = (user, message) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("Token", JSON.stringify(data.result.token));
          swal("Good job!", message, "successful");
          setIsLoading(false);
        });
    }
  }, [user, message]);
  return isLoading;
};

export default useGetJwt;
