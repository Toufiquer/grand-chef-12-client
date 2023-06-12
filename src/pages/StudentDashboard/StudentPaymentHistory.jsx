import { useGetPaymentsQuery } from "../../redux/features/payment/paymentApi";
import Loading from "../Loading/Loading";

import swal from "sweetalert";
import StudentPaymentCart from "./StudentPaymentCart";
const StudentPaymentHistory = () => {
  const { data, isLoading, isError, error } = useGetPaymentsQuery();
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    swal({
      title: "Error Occurred",
      text: error,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <h2>Ops! Nothing was Found.</h2>;
  }
  let findCount = 0;
  if (!isLoading && !isError && data?.length > 0) {
    const sortData = [...data];
    sortData.sort((a, b) => a.payTime - b.payTime);
    findCount = sortData.map((curr) => (
      <StudentPaymentCart key={curr._id} data={curr} />
    ));

    content = <div className="flex flex-col gap-2">{findCount}</div>;
  }
  return (
    <div className="relative">
      {/* Filter Section */}
      <div className="mb-2 sticky top-0 backdrop-blur-lg">
        <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="px-2">
              <strong>Total Classes:</strong> {findCount?.length || 0}
            </h2>
          </div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default StudentPaymentHistory;
