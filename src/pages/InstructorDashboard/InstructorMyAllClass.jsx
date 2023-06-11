import InstructorClassItems from "./InstructorClassItems";

const InstructorMyAllClass = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <InstructorClassItems />
        <InstructorClassItems />
        <InstructorClassItems />
        <InstructorClassItems />
      </div>
    </div>
  );
};

export default InstructorMyAllClass;
