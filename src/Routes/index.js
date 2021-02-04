import React from "react";
import {Route, Switch} from "react-router-dom";
import { Gallery, Home, TournamentResults, Membership } from "Containers"

const Routes = () => {
    return <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/TournamentResults/:selectedYear?" component={TournamentResults}/>
        <Route path = "/Gallery" component={Gallery}/>
        <Route path = "/Membership" component={Membership}/>
    </Switch>;
}

export default Routes;