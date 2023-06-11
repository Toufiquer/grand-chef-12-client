import InstructorFeedbackItem from "./InstructorFeedbackItem";

const InstructorMyAllFeedback = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <InstructorFeedbackItem />
        <InstructorFeedbackItem />
        <InstructorFeedbackItem />
        <InstructorFeedbackItem />
      </div>
    </div>
  );
};

export default InstructorMyAllFeedback;
