import { useRef, useState } from "react";
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";
import AdminInstructorStatusUpdateBtn from "./AdminInstructorStatusUpdateBtn";
const AdminInstructorClassItem = () => {
  const textAreaRef = useRef();
  const [filterStatus, setFilter] = useState("pending");
  const handleUserMutation = () => {
    console.log(textAreaRef.current.value, filterStatus);
  };
  return (
    <div className="border border-solid border-current rounded-lg px-4 py-2 mb-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="px-2">
                <strong> Class name:</strong> {"userName"}
              </h2>
              <h2 className="px-2">
                <strong>Instructor name:</strong> {<span>{"email"}</span>},{" "}
                <strong>Instructor email:</strong> {<span>{"role"}</span>}
              </h2>
              <h2 className="px-2">
                <strong> Available seats:</strong> {<span>{"role"}</span>},{" "}
                <strong> Price:</strong> {<span>{"role"}</span>}
              </h2>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            {/* If someone confirm then invoke the function */}

            <h2 className="px-2">
              <strong>Current Status:</strong> {<span>{"role"}</span>}
            </h2>
            <ConfirmBtn
              fnc={handleUserMutation}
              otherData={
                <AdminInstructorStatusUpdateBtn
                  filterStatus={filterStatus}
                  setFilter={setFilter}
                />
              }
              otherData2={
                <>
                  <h2 className="px-2">
                    <strong>Message:</strong>
                  </h2>
                  <textarea
                    ref={textAreaRef}
                    name="textarea"
                    rows="4"
                    className="p-2"
                  ></textarea>
                </>
              }
              title="Change Current Status"
              name="Update Status"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <hr className="my-2" />
        <h2 className="px-2">
          <strong> Message:</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Odit veritatis voluptas possimus numquam deserunt
          ipsam commodi. Dolor distinctio aliquam voluptatibus, voluptas
          similique, nemo facilis vel, quisquam nobis iure ut fuga?
        </h2>
      </div>
    </div>
  );
};

export default AdminInstructorClassItem;
