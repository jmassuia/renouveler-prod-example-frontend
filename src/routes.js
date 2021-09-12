import React from 'react';
import{ BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './page/Home';
import Form from './page/Form';
import Services from './page/Services&Products';

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/form' component={Form}/>
            <Route path='/services' component={Services}/>
        </Switch>
    </BrowserRouter>
    )
}