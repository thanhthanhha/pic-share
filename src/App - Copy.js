import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './config/router';
import Home from './pages/home'

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' render={() => <Home/>}/>
    //   </Routes>
    // </Router>
    <div>Hello There!</div>
  );
}

export default App;

