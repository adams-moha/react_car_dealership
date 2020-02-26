import React from "react";
import "./question-item.styles.css";

const QuestionItem = props => {
  const { questionTitle, questionBody, questionIcon, questionBgc } = props;
  return (
    <div
      className={`col-10 mx-auto my-2 col-md-6 d-flex justify-content-between ${
        questionBgc === "grey" ? "question-grey" : "question-yellow"
      } p-4`}
    >
      <a href="#home" className="question-icon mr-3">
        {questionIcon}
      </a>

      <div className="question-text w-75">
        <h4 className="question-title text-capitalize font-weight-bold">
          {questionTitle}
          <p className="question-info">{questionBody}</p>
        </h4>
      </div>
    </div>
  );
};

export default QuestionItem;
