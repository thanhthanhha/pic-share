import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './config/router';
import {Home, Browse, SignIn, SignUp, Profile, Unauthorized} from './pages';
import useAuth, {AuthProvider} from './helpers/useAuth';
import {  Protected, UserRedirect, RequireAuth } from './helpers/routes';
//import {HeaderContainer} from './containers/header';


function RouteSite() {

  const {isLogin,loading} = useAuth();
  console.log(isLogin);

  return (
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<UserRedirect isLogin={isLogin} loggedInPath={ROUTES.BROWSE}><SignIn/></UserRedirect>}/>
        <Route path={ROUTES.SIGN_UP} element={<UserRedirect isLogin={isLogin} loggedInPath={ROUTES.BROWSE}><SignUp/></UserRedirect>}/>
        {/* <Route path={ROUTES.BROWSE} element={<Protected isLogin={isLogin}><Browse/></Protected>}/> */}
        <Route path={ROUTES.BROWSE} element={<Browse/>}/>
        <Route path="/homes" element={<RequireAuth isLogin={isLogin} loading={loading}><Home/></RequireAuth>}/>
        {/* <Route element={<RequireAuth />}>
          <Route path="/profile/:userid" element={<Profile/>}>
            <Route path=":userid" element={<Profile/>}/>
            <Route path="me" />
          </Route>
        </Route> */}
        <Route path={ROUTES.HOME} element={<UserRedirect isLogin={isLogin} loggedInPath={ROUTES.BROWSE}><Home/></UserRedirect>}/>
        <Route path="/unauthorized" element={<Unauthorized/>}></Route>
      </Routes>
  )
}

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <RouteSite/>
      </AuthProvider>
      </Router>
    
  );
}



export default App;

