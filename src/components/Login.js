import { useState } from "react";
import userLogin from "../auth/userLogin";
import { useNavigate, useLocation } from "react-router-dom";



const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";
    const { error, login }= userLogin();

    const handleLogin = async (e) => {
      e.preventDefault();
      await login(email,password);
      if (!error) {
         navigate(from, {replace: true});
         setEmail("");
         setPassword("");
         return;
      } else {
         setErrorMessage(error)

      }
    }
    return (
        <>
           <h2>Login to your account</h2>
           <form onSubmit={handleLogin}>
              <input 
                 type="email" 
                 placeholder="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
              <input 
                 type="password" 
                 placeholder="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} 
             />
              {error && <p>{errorMessage}</p>}
              <button type="submit"> Login </button>
           </form>
           <p>Have no an account?</p>
           <button onClick={props.toggleForm}>Sign Up</button>  
        </>
    );
        
}

export default Login;