import { useParams } from "react-router-dom";
import DisplayCenter from "../DisplayCenter/DisplayCenter";

const DashBoardContent = () => {
  const { id } = useParams();
  return (
    <DisplayCenter>
      {" "}
      <div>
        {id}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          error odio ipsum, sapiente quaerat laudantium eos iste veritatis
          placeat explicabo, illo molestias itaque facilis soluta unde id
          aspernatur debitis voluptatibus.
        </p>
      </div>
    </DisplayCenter>
  );
};

export default DashBoardContent;
