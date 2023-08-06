import { useState } from "react";
import userLogin from "../auth/userLogin";
import { useNavigate, useLocation } from "react-router-dom";
import "./authentication.css"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state && location.state.from && location.state.from.pathname;
  const { error, login } = userLogin();

  const handleLogin = async (e) => {
   e.preventDefault();
   if (!email || !password) {
     setErrorMessage("Please enter your email and password.");
     return;
   }
 
   console.log('Logging in...');
   await login(email, password);
 
   // Proverite da li je prijava uspešna (nema greške)
   if (!error) {
     // Ako je prijava uspešna, preusmerite korisnika na odgovarajuću putanju
     const redirectTo = from || "/dashboard";
     navigate(redirectTo, { replace: true });
     setEmail("");
     setPassword("");
   } else {
     // Ako postoji greška pri prijavi, prikažite poruku o grešci
     setErrorMessage(error);
   }
 };
 
  return (
    <div className="login">
      <h2 className="loginTitle">Login to your account</h2>
      <form className="loginForm" onSubmit={handleLogin}>
        <input
          className="loginInput"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{errorMessage}</p>}
        <button className="loginButton" type="submit"> Login </button>
      </form>
      <p className="loginText">Have no an account?</p>
      <button className="loginButton" onClick={props.toggleForm}>Sign Up</button>
    </div>
  );
}

export default Login;
