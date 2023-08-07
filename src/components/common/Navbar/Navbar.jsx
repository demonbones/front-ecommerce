import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { reset } from "../../../store/slices/authSlice";

const Navbar = ({ updateCartVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector((store) => store.auth.isLogged);

  const logout = () => {
    dispatch(reset());
    navigate("/login");
  };

  const handleCartClick = () => {
    if (isLogged) updateCartVisible();
    else navigate("/login");
  };

  const userTo = isLogged ? "/profile" : "/login";

  return (
    <header className="Container-navbar">
      <div className="container__title">
        <Link to="/">
          <h1 className="header__title">e-commerce</h1>
        </Link>
      </div>

      <nav className="navbar__nav">
        <button className="navbar__nav__button0">
          <NavLink to={userTo}>
            <i className="bx icons bx-user"></i>
          </NavLink>
        </button>
        <button className="navbar__nav__button1">
          <NavLink>
            <i className="bx icons bx-box"></i>
          </NavLink>
        </button>
        <button
          type="button"
          className="navbar__nav__button"
          onClick={handleCartClick}
        >
          <i className="bx icons bx-cart-alt"></i>
        </button>
        {isLogged && (
          <button onClick={logout}>
            <i className="bx bx-log-out"></i>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
