import { useParams } from "react-router-dom";

import ClassesItem from "../ClassesItem/ClassesItem";

const DashBoardContent = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex flex-col gap-2">
        <ClassesItem />
        <ClassesItem />
        <ClassesItem />
        <ClassesItem />
      </div>
    </>
  );
};

export default DashBoardContent;
