import React from "react";

function Project(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.url}>View Project</a>
    </div>
  );
}

export default Project;
