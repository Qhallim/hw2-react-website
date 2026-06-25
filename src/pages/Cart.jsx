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

            <section className="text-center text-white py-5">
                <h1 className="display-5 fw-bold">Your Cart</h1>
                <p className="text-white-50">Review your items before checkout</p>
            </section>

            <div className="container pb-5">

                {cart.length === 0 ? (
                    <div className="text-center text-white bg-dark p-5 rounded shadow">
                        <h2>Your cart is empty</h2>
                        <p className="text-white-50">
                            Looks like you haven't added anything yet.
                        </p>

                        <Link to="/menu" className="btn btn-red mt-3">
                            Go to Menu
                        </Link>
                    </div>
                ) : (
                    <div className="row g-4">

                        {/* Left Side */}
                        <div className="col-12 col-lg-8">

                            {cart.map((item) => (
                                <div
                                    key={item.name}
                                    className="d-flex gap-3 bg-dark text-white p-3 rounded mb-3 align-items-center shadow"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                            borderRadius: "10px"
                                        }}
                                    />

                                    <div className="flex-grow-1">

                                        <h5 className="mb-1">{item.name}</h5>
                                        <p className="mb-2 text-white-50">
                                            ${item.price.toFixed(2)}
                                        </p>
                                        
                                        <div className="d-flex align-items-center gap-2">

                                            <button
                                                className="btn btn-sm btn-red"
                                                onClick={() => changeQty(item.name, -1)}
                                            >
                                                -
                                            </button>

                                            <span>{item.qty}</span>

                                            <button
                                                className="btn btn-sm btn-red"
                                                onClick={() => changeQty(item.name, 1)}
                                            >
                                                +
                                            </button>

                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-outline-light btn-sm"
                                        onClick={() => removeItem(item.name)}
                                    >
                                        Remove
                                    </button>

                                </div>
                            ))}

                        </div>

                        {/* right side */}
                        <div className="col-12 col-lg-4">

                            <div className="bg-dark text-white p-4 rounded shadow sticky-top" style={{ top: "80px" }}>

                                <h4 className="mb-3">Order Summary</h4>

                                <hr className="border-light" />

                                <h5>Total: ${total.toFixed(2)}</h5>

                                <button
                                    className="btn btn-red w-100 mt-3"
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </button>

                                <button className="btn btn-light w-100 mt-2">
                                    Checkout
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>

            <Footer />
        </>
    );
}

export default Cart;