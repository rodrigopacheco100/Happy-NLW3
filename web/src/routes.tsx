import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route exact path="/orphanage/create" component={CreateOrphanage} />
        <Route exact path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
