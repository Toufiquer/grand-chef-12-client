import { Link } from "react-router-dom";

const CardWithImg = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co/BsXpQ0z/sta-je-html.jpg" />
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>
            <strong>Email: </strong> example@gmail.com
          </p>
          <p>
            <strong>Number of Classes: </strong> 2323
          </p>
          <p>
            <strong>Name of the Classes: </strong> Class1 , Class2
          </p>
          <div className="card-actions justify-end">
            <Link to="/classes/instructor" className="btn btn-primary">
              See Classes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImg;
