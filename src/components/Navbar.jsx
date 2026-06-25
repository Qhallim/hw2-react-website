import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top px-3"
      style={{
        background: "linear-gradient(15deg,#8b0000,rgb(34,17,17))",
      }}
    >
      {/* left side */}
      <Link to="/" className="navbar-brand">
        <img
          src="assets/img/logoTransparent.png"
          alt="logo"
          className="navbar-logo"
        />
      </Link>

      {/* right side and toggler */}
      <div className="d-flex align-items-center ms-auto d-lg-none gap-3">
        
        <Link to="/cart" className="position-relative">
          <img src="assets/img/shopping-cart.webp" width="28" alt="cart" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-counter">
            {cartCount}
          </span>
        </Link>

        {/* Burger menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* mid */}
      <div className="collapse navbar-collapse" id="navbarNav">

        {/* mid links */}
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/menu">
              Menu
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* cart only desktop */}
        <div className="d-none d-lg-flex align-items-center">
          <Link to="/cart" className="position-relative">
            <img src="assets/img/shopping-cart.webp" width="28" alt="cart" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-counter">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;