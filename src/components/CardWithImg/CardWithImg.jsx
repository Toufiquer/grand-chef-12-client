/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardWithImg = ({ data }) => {
  const { _id: id, email, userName, role, photoURL } = data || {};
  return (
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
          <div className="card-actions justify-end">
            <Link to={`/instructor/${id}`} className="btn btn-primary">
              See Classes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImg;
