import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

function Home() {
    return (
        <>
            <Navbar />


            <div className="">
                <img
                    src="assets/img/homepage_banner.png"
                    alt="Halal Crate Banner"
                    className="img-fluid rounded shadow"
                />
            </div>

            <section className="container my-5 text-white">
                <div className="row align-items-center g-4">

                    <div className="text-center">
                        <h1 className="display-4 fw-bold">Halal Crate</h1>
                        <p className="lead">Fresh. Flavorful. 100% Halal.</p>
                        <p>
                            At Halal Crate, we serve the BEST halal food in NYC. With fresh
                            ingredients we create juicy burgers, crispy chicken, loaded fries,
                            and of course the beloved chicken over rice platter!
                            Every meal is prepared with love and care.
                        </p>
                    </div>

                </div>
            </section>

            <section className="container my-5">
                <Slider />
            </section>

            <Footer />
        </>
    );
}

export default Home;