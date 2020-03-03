import React from "react";
import Home from "../../pages/home/";
import About from "../../pages/about/";
import Work from "../../pages/work/";

/* routeDefinitions contains all of the app's routes,
they are rendered by the Routes component in routes/index.jsx.
Subroutes should be passed as an array to its parent's
'routes' key. */

export const routeDefinitions = [
  {
    path: "/work",
    component: Work,
    routes: [
      {
        path: "/work/project-2",
        component: Topic2
      },
      {
        path: "/work/project-1",
        component: Topic
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/",
    component: Home
  }
];

function Topic() {
  return <h3>Requested topic ID: 1</h3>;
}
function Topic2() {
  return <h3>Requested topic ID: 2</h3>;
}
