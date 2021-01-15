import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const RouterSwitch = () => {
    return (
        <Switch>
            {routes.map((route) => (
                <Route exact={route.exact} path={route.path}>
                    {route.component}
                </Route>
            ))}
        </Switch>
    );
};

export default RouterSwitch;
