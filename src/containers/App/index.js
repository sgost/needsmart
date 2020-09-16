import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPage from '../../containers/LayoutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LayoutPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
