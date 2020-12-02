import React from "react";

const HR = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow"></div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <a href="linked_page" className="btn btn-outline-success">Click Here to see</a>
      </div>
    </div>
  );
};
export default HR;
