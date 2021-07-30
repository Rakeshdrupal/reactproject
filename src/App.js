import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// components
import AdminToolbar from './components/AdminToolbar';


import HomepageLayout from './layouts/HomepageLayout';

import Homepage from './pages/Homepage';

import './default.scss';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
   
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
        />
        <Route exact path="/login" render={() => (
          <HomepageLayout>
            <Login />
          </HomepageLayout>
        )} />
        <Route exact path="/register" render={() => (
          <HomepageLayout>
            <Registration />
          </HomepageLayout>
        )}
        />
         <Route exact path="/recovery" render={() => (
          <HomepageLayout>
            <Recovery />
          </HomepageLayout>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
