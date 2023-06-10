import CardWithImg from "../../components/CardWithImg/CardWithImg";

const Instructor = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardWithImg />
        <CardWithImg />
        <CardWithImg />
        <CardWithImg />
        <CardWithImg />
      </div>
    </div>
  );
};

export default Instructor;
