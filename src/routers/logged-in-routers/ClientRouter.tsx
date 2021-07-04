import React from 'react'
import { Route } from 'react-router'
import { MainPage } from "@pages/clients";

const ClientRouter = [
    <Route exact path='/' > <MainPage /> </Route>
]

export default ClientRouter