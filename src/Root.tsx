import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect,Switch } from 'react-router-dom';

import { UserContext } from './App';
import Login from './pages/Login';
import Authentication from './pages/Authentication'
import Signup from './pages/Signup';
import Main from './pages/Main';
import AddSchedule from './pages/AddSchedule';

interface Props {

}

const Routes = <Switch>
  <Route path="/add/schedule" component={AddSchedule} />
  <Route path="/login" component={Login} />
  <Route path="/authentication" component={Authentication} />
  <Route path="/signup" component={Signup} />
  <Route path="/" component={Main} />
</Switch>

const Root: React.FC = () => {
  const { context: { user: { email } } }: any = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!email && window.location.pathname !== '/login') {
      window.location.pathname = '/login';
    }
    setLoading(false);
  }, [email])
  console.log(email, !email, email.length)
  return (
    <Router>
      {loading? 'aa': Routes}
    </Router>
  )
}

export default Root;