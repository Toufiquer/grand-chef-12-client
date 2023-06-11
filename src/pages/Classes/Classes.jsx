import ClassesCard from "../../components/ClassesCard/ClassesCard";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useGetClassesQuery } from "../../redux/features/classes/classesApi";
import Loading from "../Loading/Loading";

import swal from "sweetalert";
const Classes = () => {
  // useGetClassesQuery;
  const { isError, error, isLoading, data } = useGetClassesQuery();
  console.log(data);
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
    content = (
      <DisplayCenter>
        <h2>Ops! Nothing was Found.</h2>
      </DisplayCenter>
    );
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((curr) => (
            <ClassesCard key={curr._id} data={curr} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="my-6 py-6">{content}</div>
    </div>
  );
};

export default Classes;
