import ClassesCard from "../../components/ClassesCard/ClassesCard";

const Classes = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ClassesCard />
        <ClassesCard />
        <ClassesCard />
        <ClassesCard />
        <ClassesCard />
        <ClassesCard />
      </div>
    </div>
  );
};

export default Classes;
