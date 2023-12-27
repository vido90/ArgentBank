import React from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// Pages

import Home from '../src/pages/Home/Home';
import SignIn from '../src/pages/SignIn/SignIn.js';
/* import User from '../src/pages/User/User'; */
// import Error from '../src/pages/Error/Error';

// Layouts 
import Header from '../src/components/Header/Header.js';
import Footer from '../src/components/Footer/Footer.js';

// Styles
import './App.js';

// Routes & header/footer
function App() {
  return (
    <BrowserRouter >
    
    <div className="container">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
       {/*  <Route path="/user" element={<User />} /> */} 
      </Routes>
    
    </div>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
