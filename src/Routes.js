import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Picturepage from "./components/Picturepage";
import Privatepage from "./components/Privatepage";
import Profileedit from "./components/Profileedit";
import Myheader from "./components/Myheader";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/Picture" component={Picturepage} />
      <Route path="/Private" component={Privatepage} />
      <Route path="/ProfileEdit" component={Profileedit} />
      <Route path="/Myheader" component={Myheader} />
    </Switch>
  );
};

export default Routes;
