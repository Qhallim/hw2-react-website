import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <section className="hero-banner">
                <img src="assets/img/homepage_banner.png" alt="Halal Crate Banner" />
            </section>

            <section className="hero-content">
                <h1>Halal Crate</h1>
                <p>Fresh. Flavorful. 100% Halal.</p>
                <p>
                    At Halal Crate, we serve the BEST halal food in NYC. With fresh
                    ingredients we create juicy burgers, crispy chicken, loaded fries,
                    and of course the beloved chicken over rice platter! Every meal is
                    prepared with love and care.
                </p>
            </section>

            <Footer />

        </>
    );
}

export default Home;