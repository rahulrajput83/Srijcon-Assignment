/* Imports */
import React from "react";
import Login from "./Components/Login/Login";
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Profile/Profile";
import NewEmployee from "./Components/AddNew/NewEmployee";
import EditProfile from "./Components/EditProfile/EditProfile";
import { useSelector } from "react-redux";

/* PrivateRouting */
const Private = ({user, children}) => {
  if (!user) {
    return <Navigate to='/' replace />
  }
  return children;
}

/* Routes for application */
function App() {
  const user = useSelector((state) => state.user.email)
  return (
    <BrowserRouter>
      <Routes>
        {/* Renders Login Component when path is '/login' */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        {/* Renders Admin Component when path is '/admin' */}
        <Route path='/admin' element={<Private user={user}><Admin /></Private>} />
        {/* Renders Profile Component when path is '/profile' */}
        <Route path='/profile/:id' element={<Private user={user}><Profile /></Private>} />
        {/* Renders NewEmployee Component. */}
        <Route path='/add' element={<Private user={user}><NewEmployee /></Private>} />
        {/* Renders EditProfile Component. */}
        <Route path='/edit/:id' element={<Private user={user}><EditProfile /></Private>} />
      </Routes>
    </BrowserRouter>
  );
}

/* Exports Component */
export default App;
