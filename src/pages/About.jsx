import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar />
            <section className="text-center text-white py-5">
                <h1 className="display-5 fw-bold">About Halal Crate</h1>
                <p className="lead">Fresh. Flavorful. 100% Halal</p>
            </section>

            <div className="container pb-5">
                <div className="row align-items-center g-4">

                    <div className="col-12 col-lg-6 text-white">

                        <div className="mb-4">
                            <h2 className="h3">Our Story</h2>
                            <p>
                                Here at Halal Crate, we have a simple mission we stand by; bring high quality, affordable
                                halal food to the heart of New York City. What began as a small pop up cart on the streets of
                                Ozone Park Queens New York has grown into a local favorite restaurant for students, families and
                                food lovers across all of New York.
                            </p>
                        </div>

                        <div>
                            <h2 className="h3">What We Serve</h2>
                            <p>
                                We specialize in the classic chicken over rice platter and our juicy burgers alongside crispy
                                fried chicken and loaded gyros. Every dish is made fresh using high quality ingredients and
                                authentic spices.
                            </p>
                        </div>

                    </div>
                    
                    <div className="col-12 col-lg-6 text-center">
                        <img
                            src="assets/img/about-us-image.webp"
                            alt="About Halal Crate"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default About;