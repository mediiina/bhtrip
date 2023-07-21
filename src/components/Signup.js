import { useState } from "react";
import userSignUp from "../auth/userSignUp";
import { useNavigate, useLocation } from "react-router-dom";
import "./authentication.css"


const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard"

    const {error, signUp} = userSignUp();

    const handleSignOut = async (e) => {
      e.preventDefault();

      await signUp(email, password)

      if(!error) {
         navigate(from, {replace: true})
         setEmail("")
         setPassword("")

         return
      } else {
         setErrorMessage(error)
      }
    }
    return (
        <div className="signUp">
           <h2 className="signUpTitle">Create your account</h2>
           <form className= "signUpForm"  onSubmit={handleSignOut}>
              <input className="signUpInput"
                 type="email" 
                 placeholder="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} 
                  />
              <input className="signUpInput"
                 type="password" 
                 placeholder="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />
              {error && <p>{errorMessage}</p>}
              <button className="signUpButton" type="submit"> Sign Up </button>
           </form>
           <p className="signUpText" >Have an account?</p>
           <button className="signUpButton" onClick={props.toggleForm}>Login</button> 
        </div>
    );
        
    
}

export default SignUp;