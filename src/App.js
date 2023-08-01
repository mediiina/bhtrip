import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Authentication from "./pages/Authentication"
import Error from "./pages/Error"
import Dashboard from "./pages/Dashboard"
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout';
import PlacesToGo from "./pages/PlacesToGo"
import Detail from "./pages/Detail"
import PlanYourTrip from "./pages/PlanYourTrip"
import Footer from './pages/Footer';
import Navbar from './Navbar';


 
function App() {
  return (
    <div className='App'>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="*" element={<Error />} />
      <Route path="/places-to-go" element={<PlacesToGo/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/plan-your-trip" element={<PlanYourTrip/>} />

      {/*private pages*/}
      <Route element={<PrivateRoutesLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
    <Footer></Footer>
    </div>
  ) 
}

export default App;