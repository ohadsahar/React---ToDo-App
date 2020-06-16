import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeComponent } from "../home/home";
import { TaskComponent } from "../tasks/task";
export class RoutingComponent extends React.Component<any> {

    render() {
        return <Switch>
            <Route path="/home" component={HomeComponent} />
            <Route path="/tasks"  component={TaskComponent} />
        </Switch>
    }
}