import React from "react";
import "./App.scss";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";

import Experience from "./admin/Experience";
import ExperienceCreate from "./admin/ExperienceCreate";
import ExperienceUpdate from "./admin/ExperienceUpdate";

import Project from "./admin/Project";
import ProjectCreate from "./admin/ProjectCreate";
import ProjectUpdate from "./admin/ProjectUpdate";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/experience/create" component={ExperienceCreate} />
        <Route
          exact
          path="/experience/update/:slug"
          component={ExperienceUpdate}
        />
        <Route exact path="/project" component={Project} />
        <Route exact path="/project/create" component={ProjectCreate} />
        <Route exact path="/project/update/:slug" component={ProjectUpdate} />
      </Switch>
    </>
  );
};

export default App;
