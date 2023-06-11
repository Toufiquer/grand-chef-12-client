/* eslint-disable no-unused-vars */
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useParams, Link } from "react-router-dom";
import { useGetInstructorQuery } from "../../redux/features/instructor/instructorApi";
import Loading from "../Loading/Loading";
import swal from "sweetalert";
const ClassesInstructor = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetInstructorQuery(id);
  console.log(data);
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    swal({
      title: "User is successfully deleted",
      text: error,
      icon: "success",
      buttons: true,
      dangerMode: false,
    });
  }
  if (!isLoading && !isError && data?._id === undefined) {
    content = <h2>Ops! Nothing was Found.</h2>;
  }
  if (!isLoading && !isError && data?._id) {
    const { email, userName, role, photoURL } = data || {};
    content = (
      <>
        <DisplayCenter>
          <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img
                      src={`${
                        photoURL
                          ? photoURL
                          : "https://i.ibb.co/BsXpQ0z/sta-je-html.jpg"
                      } `}
                      alt={userName}
                    />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{userName}</h2>
                <p>
                  <strong>Email: </strong> {email || "Loading..."}
                </p>
                <p>
                  <strong>Number of Classes: </strong> 2323
                </p>
                <p>
                  <strong>Name of the Classes: </strong> Class1 , Class2
                </p>
                <p className="text-justify">
                  <strong>Details:</strong>According to the current web page
                  context, some qualities of a good teacher include skills in
                  communication, listening, collaboration, adaptability, empathy
                  and patience. Other characteristics of effective teaching
                  include an engaging classroom presence, value in real-world
                  learning, exchange of best practices and a lifelong love of
                  learning1.
                </p>
                <p className="text-justify">
                  In addition to these qualities, good teachers are able to
                  spark connections with students on a personal level and
                  communicate regularly with parents2. They also have a
                  repertoire of soft skills such as communication, collaboration
                  and a lifelong-learning mindset, which complement hard skills
                  like classroom management3.
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/instructor/contact/${id}`}
                    className="btn btn-primary"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DisplayCenter>
      </>
    );
  }
  return content;
};

export default ClassesInstructor;
