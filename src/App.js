import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from './components/loader';
import * as ROUTES from './constants/Routes';
import UserContext from './context/UserContext';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {

  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route exact path={ROUTES.DASHBOARD} >
              <Dashboard />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App
