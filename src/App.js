import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";


import RootRoutes from './views/_routes';

const App = () => (
    <main>
        <Router>
            <Switch>
                <RootRoutes />
            </Switch>
        </Router>
    </main>
    
)

export default App;