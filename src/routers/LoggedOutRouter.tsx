import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CreateAccount, Login } from "@pages";

function LoggedOutRouter () {
    return (
        <Router>
            <Switch>
                <Route exact path='/' > <Login /> </Route>
                <Route path='/signup' > <CreateAccount /> </Route>
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default LoggedOutRouter