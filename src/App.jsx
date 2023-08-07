import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Cart from "./components/common/Cart/Cart";
import { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleVisibilityCart = (e) => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <div className="container-app">
      <nav className="coniner-nav">
        <Navbar updateCartVisible={toggleVisibilityCart} />
      </nav>

      <main className="main-container">
        <Outlet />
      </main>
      <Cart isVisible={isCartVisible} />
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
