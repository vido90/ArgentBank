import React from 'react';
import { Route, Routes } from "react-router-dom";

// Pages

import Home from '../src/pages/Home/Home';
import SignIn from '../src/pages/SignIn/SignIn';
import SignUp from '../src/pages/SignUp/SignUp';
import User from '../src/pages/User/User';
import Error from '../src/pages/Error/Error';

// Layouts 
import Header from '../src/layouts/Header/Header';
import Footer from '../src/layouts/Footer/Footer';

// Styles
import './App.js';

// Routes & header/footer
function App() {
  return (
    <>
    <div className="contenair">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />

        <Route path="*" element={<Error />} />
      </Routes>
    
    </div>
      
    <Footer />
    </>
  );
}

export default App;
