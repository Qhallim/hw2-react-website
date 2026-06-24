import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img
          src="assets/img/logoTransparent.png"
          className="logo"
          alt="logo"
        />
      </Link>

      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <Link to="/cart" id="cart-btn">
          <img src="assets/img/shopping-cart.webp" alt="cart" />
          <span id="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;