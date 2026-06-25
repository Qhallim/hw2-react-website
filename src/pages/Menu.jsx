import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const menuItems = [
    { name: "Chicken Over Rice", price: 12.99, img: "assets/img/chicken-over-rice.jpg" },
    { name: "Lamb Over Rice", price: 12.99, img: "assets/img/lamb-over-rice.jpg" },
    { name: "Grilled Burger", price: 11.99, img: "assets/img/burger.avif" },
    { name: "Chicken Sandwich", price: 9.99, img: "assets/img/Chicken-sandwich.jpg" },
    { name: "Grilled Gyro", price: 9.99, img: "assets/img/gyro.jpg" },
    { name: "Spicy Wings", price: 9.99, img: "assets/img/wings.jpg" },
    { name: "Fries", price: 6.99, img: "assets/img/fries.webp" },
    { name: "Mozzarella Sticks", price: 6.99, img: "assets/img/mozzy-sticks.jpg" },
    { name: "Soda", price: 2.99, img: "assets/img/soda.webp" },
    { name: "Bottled Water", price: 2.50, img: "assets/img/water.jpg" },
];

function Menu() {
    const { addToCart, showToast } = useCart();

    return (
        <>
            <Navbar />

            <section className="container py-5">

                <div className="row g-4">
                    {menuItems.map((item, index) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={index}>

                            <div className="card h-100 bg-dark text-white border-0 shadow">

                                <img
                                    src={item.img}
                                    className="card-img-top"
                                    alt={item.name}
                                    style={{ height: "180px", objectFit: "cover" }}
                                />

                                <div className="card-body text-center d-flex flex-column">

                                    <h5 className="card-title">{item.name}</h5>

                                    <p className="mb-3">
                                        ${item.price.toFixed(2)}
                                    </p>

                                    <button
                                        className="btn btn-red mt-auto"
                                        onClick={() => {
                                            addToCart(item.name, item.price, item.img);
                                            showToast(`${item.name} added to cart!`);
                                        }}
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Menu;