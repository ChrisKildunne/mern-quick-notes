import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react"

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true)
  const handleClick = () => {
    setShowLogin(!showLogin)
  }
  return (
    <main>
      <button onClick={handleClick}>
        {showLogin ? "No Account? Sign Up" : "Already Have an Account? Login"}
      </button>
        {showLogin ? <LoginForm setUser={setUser} handleClick={handleClick} /> : <SignUpForm setUser={setUser} handleClick={handleClick} /> }
      <h1>AuthPage</h1>
    </main>
  );
}
