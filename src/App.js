import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Login from './pages/LoginPage'
import Register from './pages/Register'
import Search from './pages/Search'
import React, { useEffect } from 'react'
import PostDetailsPage from './pages/PostDetailsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { actAsyncAllCategory } from './store/category/action'
import {actAsyncGetInfoUser} from './store/auth/actions'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actAsyncAllCategory())
    dispatch(actAsyncGetInfoUser())
  }, [dispatch])
  return (
    <Router>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/post/:slug">
            <PostDetailsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
