/* eslint-disable react/prop-types */
const AdminInstructorStatusUpdateBtn = ({ filterStatus, setFilter }) => {
  return (
    <div>
      <div className="flex gap-4">
        <div
          onClick={() => setFilter("pending")}
          className={`btn btn-outline ${
            filterStatus === "pending" && "bg-slate-400 text-gray-800"
          }`}
        >
          Pending
        </div>
        <div
          onClick={() => setFilter("approved")}
          className={`btn btn-outline ${
            filterStatus === "approved" && "bg-slate-400 text-gray-800"
          }`}
        >
          Approved
        </div>
        <div
          onClick={() => setFilter("denied")}
          className={`btn btn-outline ${
            filterStatus === "denied" && "bg-slate-400 text-gray-800"
          }`}
        >
          Denied
        </div>
      </div>
    </div>
  );
};

export default AdminInstructorStatusUpdateBtn;
