import React from 'react'
import { Switch, Route as ReactDOMRoute } from 'react-router-dom'

import Route from './Route'

import Dashboard from '../pages/Dashboard'
import NewUser from '../pages/user/NewUser'
import UpdateUser from '../pages/user/UpdateUser'
import NewNews from '../pages/news/NewNews'
import UpdateNews from '../pages/news/UpdateNews'
import Login from '../pages/Login'

const Routes: React.FC = () => (
  <Switch>
    <ReactDOMRoute path="/" exact component={Dashboard} />
    <ReactDOMRoute path="/login" component={Login} />
    
    <ReactDOMRoute path="/users" exact component={NewUser} />
    <Route path="/users/:id" isPrivate component={UpdateUser}/>

    <Route path="/news" isPrivate exact component={NewNews} />
    <Route path="/news/:id" isPrivate component={UpdateNews} />
  </Switch>
)

export default Routes
