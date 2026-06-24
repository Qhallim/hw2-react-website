import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, changeQty, removeItem, clearCart } = useCart();

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);

    return (
        <>
            <Navbar />

            <section className="cart-heading">
                <h1>Your Cart</h1>
                <p>Review your items before checkout</p>
            </section>

            <section className="cart-container">
                <div className="cart-box">

                    {/* Empty Cart */}
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added anything yet.</p>

                            <Link to="/menu" className="cart-btn">
                                Go to Menu
                            </Link>
                        </div>
                    ) : (
                        <>
                            {cart.map((item) => (
                                <div className="cart-item" key={item.name}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />

                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                        <p>${item.price.toFixed(2)}</p>

                                        <div className="qty-controls">
                                            <button onClick={() => changeQty(item.name, -1)}>
                                                -
                                            </button>

                                            <span>{item.qty}</span>

                                            <button onClick={() => changeQty(item.name, 1)}>
                                                +
                                            </button>
                                        </div>

                                        <button onClick={() => removeItem(item.name)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Price Sum */}
                            <div className="cart-total">
                                <h2>Total: ${total.toFixed(2)}</h2>
                                <button onClick={clearCart}>Clear Cart</button>
                            </div>
                        </>
                    )}

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Cart;