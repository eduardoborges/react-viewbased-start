import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'; 


// small components
import FloatCart from "../components/FloatCart";

// Views
import Home     from './Home';
import Filter   from "./Filter";
import Results  from './Results';


export default () => (
    <Fragment>
        <FloatCart countItens={3} />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/filter" component={Filter} />
            <Route path="/results" component={Results} />
        </Switch>
    </Fragment>
    

)