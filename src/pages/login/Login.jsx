import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/login/LoginForm/LoginForm";
import { startSessionThunk } from "../../store/slices/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const location = useLocation();
  const from = location.state?.from;

  const dispatch = useDispatch();
  const handleLogin = (loginData) => {
    dispatch(startSessionThunk(loginData));
  };
  return (
    <div className="container-login">
      <section>
        <p className="Welcome-login">
          Welcome! Enter yor email and password to continue
        </p>

        <section className="test-data">
          <h3>Test data</h3>
          <ul className="ul-test-data">
            <li className="filed">
              <i className="bx bx-envelope"></i> stiven@gmail.com
            </li>
            <li className="filed">
              <i className="bx bx-lock-alt"></i> 123
            </li>
          </ul>
        </section>
        <LoginForm onLogin={handleLogin} />
        {isLogged && <Navigate to={from ?? "/"} />}
      </section>
    </div>
  );
};

export default Login;
