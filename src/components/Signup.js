import { useState } from "react";
import userSignUp from "../auth/userSignUp";
import { useNavigate, useLocation } from "react-router-dom";
import "./authentication.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state && location.state.from && location.state.from.pathname;

  const { error, signUp } = userSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    console.log('Signing up...');
    const res = await signUp(email, password);

    // Proverite da li je registracija uspešna (nema greške)
    if (!error) {
      // Ako je registracija uspešna, preusmerite korisnika na odgovarajuću putanju
      const redirectTo = from || "/dashboard";
      navigate(redirectTo, { replace: true });
      setEmail("");
      setPassword("");
    } else {
      // Ako postoji greška pri registraciji, prikažite poruku o grešci
      setErrorMessage(error);
    }
  };

  return (
    <div className="signUp">
      <h2 className="signUpTitle">Create your account</h2>
      <form className="signUpForm" onSubmit={handleSignUp}>
        <input
          className="signUpInput"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signUpInput"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{errorMessage}</p>}
        <button className="signUpButton" type="submit"> Sign Up </button>
      </form>
      <p className="signUpText">Have an account?</p>
      <button className="signUpButton" onClick={props.toggleForm}>Login</button>
    </div>
  );
}

export default SignUp;
