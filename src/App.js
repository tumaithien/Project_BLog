import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Login from './pages/LoginPage'
import Register from './pages/Register'
import Search from './pages/Search'
import DemoPage from './pages/DemoPage'
import ChangePassPage from './pages/ChangePassPage'
import PageNotFound from './pages/PageNotFound'
import SearchCategory from './pages/SearchCategory'

import React, { useEffect } from 'react'
import PostDetailsPage from './pages/PostDetailsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux'


import { actAsyncAllCategory } from './store/category/action'
import { actAsyncGetInfoUser } from './store/auth/actions'
import { actAsyncGetMenu, actAsyncGetMenuFooter } from './store/menu/action'
import { actAsyncGetTags } from './store/tag/action'
import UserInfo from './pages/UserInfo'



function App() {

  // const location1 = window.location.pathname
  // const [hideMenu, setHideMenu] = useState(false)
  // useEffect(() => {
  //   if(location1 === "/login"){
  //     setHideMenu(true)
  //   }
  // },[location1, hideMenu])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actAsyncAllCategory())
    dispatch(actAsyncGetInfoUser())
    dispatch(actAsyncGetMenu())
    dispatch(actAsyncGetMenuFooter())
    dispatch(actAsyncGetTags())
  }, [dispatch])
  return (
    <Router>
      <div className="wrapper-content">
      <Header />
        {/* {
          !hideMenu && <Header /> 
        } */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/info-user">
            <UserInfo />
          </Route>
          <Route path="/change-pass">
            <ChangePassPage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/post/:slug">
            <PostDetailsPage />
          </Route>
          <Route path="/category/:slug">
            <SearchCategory />
          </Route>
          <Route path="/demo">
            <DemoPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
