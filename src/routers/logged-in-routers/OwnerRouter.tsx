import React from 'react'
import { Route } from 'react-router'
import { CreateRestaurantPage, OwnerMainPage } from '@pages/owners';
import { RestaurantPage } from '@pages/clients';

const OwnerRouter = [
    <Route key={1} exact path='/' > <OwnerMainPage /> </Route>,
    <Route key={2} path='/create-restaurant' > <CreateRestaurantPage /> </Route>,
    <Route key={3} path='/restaurant/:id' > <RestaurantPage /> </Route>,
]

export default OwnerRouter