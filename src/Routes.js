import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Picturepage from "./pages/Picturepage";
import Privatepage from "./pages/Privatepage";
import Profileedit from "./pages/Profileedit";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/Picture" component={Picturepage} />
      <Route path="/Private" component={Privatepage} />
      <Route path="/ProfileEdit" component={Profileedit} />
    </Switch>
  );
};

export default Routes;
