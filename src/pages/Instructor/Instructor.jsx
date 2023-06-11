import CardWithImg from "../../components/CardWithImg/CardWithImg";
import { useGetInstructorsQuery } from "../../redux/features/instructor/instructorApi";

import Loading from "../Loading/Loading";

import swal from "sweetalert";
const Instructor = () => {
  const { isError, error, isLoading, data } = useGetInstructorsQuery();
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    swal({
      title: "Ops! Something went wrong",
      text: error,
      icon: "success",
      buttons: true,
      dangerMode: true,
    });
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <h2>Ops! Nothing was Found.</h2>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((curr) => (
            <CardWithImg key={curr._id} data={curr} />
          ))}
        </div>
      </>
    );
  }
  return <div className="container mx-auto">{content}</div>;
};

export default Instructor;
