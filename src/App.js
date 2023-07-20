import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Authentication from "./pages/Authentication"
import Error from "./pages/Error"
import Dashboard from "./pages/Dashboard"
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="*" element={<Error />} />

      {/*private pages*/}
      <Route element={<PrivateRoutesLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
  );
}

export default App;