import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = lazy(() => import('./Pages/Home'))
const CreateStore = lazy(() => import('./Pages/CreateStore'))
const StoreProfile = lazy(() => import('./Pages/StoreProfile'))
const NotFound = lazy(() => import('./Pages/NotFound'))

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route path="/storeProfile">
            <StoreProfile />
          </Route>
          <Route path="/createStore">
            <CreateStore />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}
