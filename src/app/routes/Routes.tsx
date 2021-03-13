import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Signin} from '../pages/signin/Signin';
import {Signup} from '../pages/signup/Signup';
import {Dashboard} from '../pages/dashboard/Dashboard';

export const Routes: React.FC = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />

                <Route path="*" component={() => <Redirect to="/signin"/>} />
            </Switch>
        </BrowserRouter>
    );

}