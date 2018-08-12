import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// component
import App from "../App"
import Recipe from './Recipe';


const Router = () => (

   <BrowserRouter>
      <Switch>
         <Route path="/" component={App} exact />
         <Route path="/recipe/:id" component={Recipe} />
      </Switch>
   </BrowserRouter>

)

export default Router;

