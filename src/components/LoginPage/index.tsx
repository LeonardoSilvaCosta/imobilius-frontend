import LockerImg from "../../assets/images/locker.svg";

import "./styles.css";

export function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <img src={LockerImg} alt="locker" />
          <h5>Login</h5>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />
          <div className="checkbox-container">
            <input type="checkbox" name="remember-me" />
            <label>Lembre-se de mim.</label>
          </div>
          <button>Entrar</button>
          <a href="#">Esqueceu a sua senha?</a>
        </form>
        <p>Copyright @Mobilius 2022.</p>
      </div>
    </div>
  );
}
