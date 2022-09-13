import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './config/router';
import {Home, Browse, SignIn, SignUp} from './pages';
//import {HeaderContainer} from './containers/header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.BROWSE} element={<Browse/>}/>
        <Route path={ROUTES.SIGN_IN} element={<SignIn/>}/>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;

