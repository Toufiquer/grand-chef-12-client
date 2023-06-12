import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useParams, useNavigate } from "react-router-dom";
import { useGetClassQuery } from "../../redux/features/classes/classesApi";
import { useEffect } from "react";
import swal from "sweetalert";
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";
import { useAddPaymentMutation } from "../../redux/features/payment/paymentApi";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Payment = () => {
  const { id } = useParams();
  // load user data
  const [user, ,] = useAuthState(auth);
  // load class Data
  const { data, isLoading, isError, error } = useGetClassQuery(id);
  console.log(data);
  const [addPayment, { isSuccess, isLoading2, isError2, error2 }] =
    useAddPaymentMutation();
  const navigate = useNavigate();
  useEffect(() => {
    isSuccess &&
      swal({
        title: "Good Job!",
        text: "Payment is complete",
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
    isSuccess && navigate("/studentDashboard/studentPaymentHistory");
    isError2 &&
      swal({
        title: "Ops! something went wrong",
        text: error2,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
  }, [isSuccess, isError2, error2, navigate]);
  const {
    _id,
    email,
    payment = false,
    className,
    instructorName,
    photoUrl,
    price,
    seats,
  } = (data?.length >= 1 && data[0]) || {};
  useEffect(() => {
    isError &&
      swal({
        title: "Error Occurred",
        text: error,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
  }, [isError, error]);
  const handlePayment = () => {
    data?.length >= 1 &&
      addPayment({
        ...data[0],
        userEmail: user?.email,
        payment: true,
        payTime: new Date(),
      });
  };
  return (
    <div>
      <DisplayCenter>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl mb-4">
            Please Payment For This Class to access.
          </h2>
          <p className="text-red-500 mb-2 text-center">
            Only Click Payment and confirm it.
            <br /> Payment method will develop soon.
          </p>
          <div className="max-w-[480px]">
            <div className="border border-solid border-current rounded-lg px-4 py-2 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img
                          src={
                            photoUrl ||
                            "https://i.ibb.co/BsXpQ0z/sta-je-html.jpg"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="px-2">
                        <strong> Class name:</strong> {className}
                      </h2>
                      <h2 className="px-2">
                        <strong>Instructor name:</strong>{" "}
                        {<span>{instructorName}</span>},{" "}
                        <strong>Instructor email:</strong>{" "}
                        {<span>{"role"}</span>}
                      </h2>
                      <h2 className="px-2">
                        <strong> Available seats:</strong>{" "}
                        {<span>{seats}</span>}, <strong> Price:</strong>{" "}
                        {<span>{price}</span>}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <hr className="my-2" />
                <h2 className="px-2">
                  <strong> Class Summary:</strong> Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Odit veritatis voluptas possimus
                  numquam deserunt ipsam commodi. Dolor distinctio aliquam
                  voluptatibus, voluptas similique, nemo facilis vel, quisquam
                  nobis iure ut fuga?
                </h2>
              </div>
            </div>
          </div>
          <ConfirmBtn
            disabled={isLoading2 || isLoading}
            name="payment"
            fnc={handlePayment}
          />
        </div>
      </DisplayCenter>
    </div>
  );
};

export default Payment;
