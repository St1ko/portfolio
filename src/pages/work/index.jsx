import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Work = _ => {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Work</h2>
      <ul>
        <li>
          <Link to={`${match.url}/project-1`}>Project 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/project-2`}>Project 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Work;
