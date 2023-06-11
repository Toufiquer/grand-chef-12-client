import { useState } from "react";
import AdminInstructorClassItem from "./AdminInstructorClassItem";

const AdminInstructorAllClass = () => {
  const data = [];
  const findCount = [];
  const [filterUsers, setFilter] = useState("allClasses");
  return (
    <div>
      <div className="flex flex-col gap-2">
        {/* Filter Section */}
        <div className="mb-2 sticky top-0 backdrop-blur-lg">
          <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="px-2">
                <strong>Total Users:</strong> {data?.length || 0}
              </h2>
              <h2 className="px-2">
                <strong>Found:</strong> {findCount?.length || 0} class
                {findCount.length <= 1 ? "" : "es"}
              </h2>
            </div>
            <div className="flex gap-4">
              <div
                onClick={() => setFilter("allClasses")}
                className={`btn btn-outline ${
                  filterUsers === "allClasses" && "bg-slate-400 text-gray-800"
                }`}
              >
                ALL Classes
              </div>
              <div
                onClick={() => setFilter("pending")}
                className={`btn btn-outline ${
                  filterUsers === "pending" && "bg-slate-400 text-gray-800"
                }`}
              >
                Pending
              </div>
              <div
                onClick={() => setFilter("approved")}
                className={`btn btn-outline ${
                  filterUsers === "approved" && "bg-slate-400 text-gray-800"
                }`}
              >
                Approved
              </div>
              <div
                onClick={() => setFilter("denied")}
                className={`btn btn-outline ${
                  filterUsers === "denied" && "bg-slate-400 text-gray-800"
                }`}
              >
                Denied
              </div>
            </div>
          </div>
        </div>

        <AdminInstructorClassItem />
        <AdminInstructorClassItem />
        <AdminInstructorClassItem />
        <AdminInstructorClassItem />
      </div>
    </div>
  );
};

export default AdminInstructorAllClass;
