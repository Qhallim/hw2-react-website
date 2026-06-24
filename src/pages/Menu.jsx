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

            <section className="menu-grid">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>

                        {/* IMAGE */}
                        <img src={item.img} alt={item.name} />

                        {/* TEXT */}
                        <h3>{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>

                        <button
                            onClick={() => {
                                addToCart(item.name, item.price, item.img);
                                showToast(`${item.name} added to cart!`);
                            }}
                        >
                            Add to Cart
                        </button>

                    </div>
                ))}
            </section>

            <Footer />

        </>
    );
}

export default Menu;

