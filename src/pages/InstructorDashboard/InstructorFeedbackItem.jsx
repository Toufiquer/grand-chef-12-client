const InstructorFeedbackItem = () => {
  return (
    <div>
      <div>
        <div>
          <div className="border border-solid border-current rounded-lg px-4 py-2 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="px-2">
                <strong>Name:</strong> {"userName"}
              </h2>{" "}
              <h2 className="px-2">
                <strong>Status:</strong> {<span>{"pending"}</span>}
              </h2>
              <h2 className="px-2">
                <strong>Message:</strong>{" "}
                {
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, et? Aliquid consequuntur dignissimos
                    incidunt molestiae error illo numquam exercitationem,
                    repellat quaerat! Quisquam ipsam natus quod doloribus
                    perferendis iste pariatur porro.
                  </span>
                }
              </h2>
            </div>
            <div className="flex gap-4">
              <div className="btn btn-accent">Approve</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorFeedbackItem;
