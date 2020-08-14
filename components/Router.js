import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipeDetails from './RecipeDetails';
import App from './../App';

function Router(props)
{   return (
           
          <BrowserRouter>
            <Switch>
                <Route 
                    exact path="/" 
                    component={App}
                />
                <Route 
                    path="/recipe/:id" 
                    component={RecipeDetails}
                />
                
            </Switch>
          </BrowserRouter>
          );
}

export default Router;