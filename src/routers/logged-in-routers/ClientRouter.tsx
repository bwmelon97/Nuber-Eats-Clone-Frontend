import React from 'react'
import { Route } from 'react-router'
import { MainPage, SearchPage } from "@pages/clients";

const ClientRouter = [
    <Route key={1} exact path='/' > <MainPage /> </Route>,
    <Route key={2} path='/search' > <SearchPage /> </Route>
]

export default ClientRouter