import { Link } from "react-router-dom";

const ClassesItem = () => {
  return (
    <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
      <h2 className="px-2">Title Course</h2>
      <div className="flex gap-4">
        <button className="btn btn-secondary">Delete</button>
        <Link to="/payment/:email" className="btn btn-accent">
          Payment
        </Link>
      </div>
    </div>
  );
};

export default ClassesItem;
