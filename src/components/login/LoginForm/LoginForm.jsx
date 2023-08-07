import { useId, useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const emailId = useId();
  const passwordId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) return;
    onLogin(formData);
  };

  return (
    <main className="container-login">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={emailId}>Email</label>
        </div>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          id={emailId}
          name="email"
          className="input-login"
          required
        />

        <div>
          <label htmlFor={passwordId}>Password</label>
        </div>

        <div className="container-input-password">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={formData.passwrd}
            onChange={handleChange}
            id={passwordId}
            name="password"
            className="input-login-password"
            required
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="button-password"
          >
            {isPasswordVisible ? (
              <i className="bx bxs-low-vision"></i>
            ) : (
              <i className="bx bxs-show"></i>
            )}
          </button>
        </div>
        <br />

        <button type="submit" className="submit-button-login">
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
