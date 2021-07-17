import React from 'react'
import { Route } from 'react-router'
import { CreateRestaurantPage, OwnerMainPage } from '@pages/owners';

const OwnerRouter = [
    <Route key={1} exact path='/' > <OwnerMainPage /> </Route>,
    <Route key={2} path='/create-restaurant' > <CreateRestaurantPage /> </Route>,
]

export default OwnerRouter