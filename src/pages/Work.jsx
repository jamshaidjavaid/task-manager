import React from "react";

import InProgress from "../components/Work/InProgress";
import InReview from "../components/Work/InReview";
import Todo from "../components/Work/Todo";
import Completed from "../components/Work/Completed";

import "../styles/Work.scss";

const Work = () => {
  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <div className="work-container">
      <Todo />
      <InProgress />
      <InReview />
      <Completed />
    </div>
  );
};

export default Work;
