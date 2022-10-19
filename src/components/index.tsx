import LockerImg from "../assets/images/locker.svg";

import "./styles.css";

export function Login() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="loginHeader">
          <img src={LockerImg} alt="locker" />
          <h5>Login</h5>
        </div>
        <form className="loginForm">
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />
          <div className="checkboxContainer">
            <input type="checkbox" name="remember-me" />
            <label>Lembre-se de mim.</label>
          </div>
          <button>Entrar</button>
          <a>Esqueceu a sua senha?</a>
        </form>
        <p>Copyright @Mobilius 2022.</p>
      </div>
    </div>
  );
}
