import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "@pages";
import { UserRole } from "@gql-types/globalTypes";
import { ClientRouter } from "./logged-in-routers";
import { Header } from "@components";
import useMe from "@hooks/useMe";

function LoggedInRouter () {
    
    const { loading, data } = useMe()
    
    if ( !data || loading ) {
        return (
            <div className='flex justify-center items-center text-xl' >
                loading...
            </div>
        )
    }

    const { me: { role } } = data;
    return (
        <Router>
            <Header />
            <Switch>
                {role === UserRole.Client && ClientRouter.flat()}
                <Route > <NotFound /> </Route>
            </Switch>
        </Router>
    )
}

export default LoggedInRouter