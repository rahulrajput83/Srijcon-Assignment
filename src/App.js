/* Imports */
import React from "react";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Profile/Profile";
import NewEmployee from "./Components/AddNew/NewEmployee";

/* Routes for application */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Renders Login Component when path is '/login' */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        {/* Renders Admin Component when path is '/admin' */}
        <Route path='/admin' element={<Admin />} />
        {/* Renders Profile Component when path is '/profile' */}
        <Route path='/profile/:id' element={<Profile />} />
        {/* Renders NewEmployee Component. */}
        <Route path='/add' element={<NewEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

/* Exports Component */
export default App;
