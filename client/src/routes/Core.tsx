import React from 'react';

import {Switch, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import GameRouter from './modules/Game';

import Error500 from "../errors/Error500";
import Error404 from "../errors/Error404";

export default () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path={`/`} component={GameRouter}/>
                    <Route path="/500" component={Error500}/>
                    <Route component={Error404}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};
