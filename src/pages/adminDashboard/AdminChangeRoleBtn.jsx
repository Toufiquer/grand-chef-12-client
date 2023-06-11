/* eslint-disable react/prop-types */
const AdminChangeRoleBtn = ({ filterUsers, setFilter }) => {
  return (
    <div>
      <div className="flex gap-4">
        <div
          onClick={() => setFilter("student")}
          className={`btn btn-outline ${
            filterUsers === "student" && "bg-slate-400 text-gray-800"
          }`}
        >
          Students
        </div>
        <div
          onClick={() => setFilter("admin")}
          className={`btn btn-outline ${
            filterUsers === "admin" && "bg-slate-400 text-gray-800"
          }`}
        >
          Admin
        </div>
        <div
          onClick={() => setFilter("instructor")}
          className={`btn btn-outline ${
            filterUsers === "instructor" && "bg-slate-400 text-gray-800"
          }`}
        >
          Instructor
        </div>
      </div>
    </div>
  );
};

export default AdminChangeRoleBtn;
