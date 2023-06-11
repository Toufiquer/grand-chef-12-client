const InstructorStudentItem = () => {
  return (
    <div>
      <div>
        <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="px-2">
              <strong>Name:</strong> {"userName"}
            </h2>
            <h2 className="px-2">
              <strong>Status:</strong> {<span>{"status"}</span>}
            </h2>
            <h2 className="px-2">
              <strong>Total Enrolled Students:</strong> {<span>{"22"}</span>}
            </h2>
            <h2 className="px-2">
              <strong>Feedback:</strong> {<span>{"22"}</span>}
            </h2>
          </div>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default InstructorStudentItem;
