import React from 'react'; 
import './App.scss';
import LazyLoader from './components/LazyLoader/LazyLoader';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Header from './components/Header/Header';
 
const MainPage = React.lazy(() => import('./pages/Main'));

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(MainPage)} />
        <Route exact path="/:index" component={LazyLoader(MainPage)} />
        <Route exact path="/:index/:activeFilter" component={LazyLoader(MainPage)} />
      </Switch>
    </Router>
  );
}
 
export default App;