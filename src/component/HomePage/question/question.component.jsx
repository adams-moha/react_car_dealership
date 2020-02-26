import React from "react";
import "./question.styles.css";
import QuestionItem from "./question-item.component";

const Question = () => {
  return (
    <div className="section question py-5" id="question">
      <div className="container">
        <div className="row">
          <QuestionItem
            questionTitle="Are you looking for a car?"
            questionBody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  nulla?"
            questionIcon={<i className="fas fa-search fa-fw" />}
            questionBgc="grey"
          />

          <QuestionItem
            questionTitle="Are you selling a car?"
            questionBody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  nulla?"
            questionIcon={<i className="fas fa-dollar-sign fa-fw" />}
            questionBgc="yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
