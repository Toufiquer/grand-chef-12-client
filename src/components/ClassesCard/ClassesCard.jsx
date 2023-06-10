import { Link } from "react-router-dom";

const ClassesCard = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/BsXpQ0z/sta-je-html.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>
            <strong>Email: </strong> example@gmail.com
          </p>
          <p>
            <strong>Available seats: </strong> 2323
          </p>
          <p>
            <strong>Price: </strong> 2323
          </p>
          <p>
            <strong>Instructor name: </strong> Class1 , Class2
          </p>
          <div className="card-actions justify-end">
            <Link to="/classes/instructor/name" className="btn btn-primary">
              Enroll Classes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
