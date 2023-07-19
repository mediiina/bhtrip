import { Container } from 'react-bootstrap';
import './App.css';
import Signup from "./components/Signup";
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    
      <Container 
         className="d-flex align-items-center justify-content-center"
         style={{minHeight:"100vh"}}
      >
         <div className="w-100" style={{maxWidth:' 400px '}} >
           <Router>
             <AuthProvider>
              <Routes>
                <Route path='/' element={ProtectedRoute}>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/update-profile' element={<UpdateProfile/>}/> 
                </Route>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
              </Routes>
             </AuthProvider>
           </Router>
         </div>
      </Container>
)
}

export default App;
