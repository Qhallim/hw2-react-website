import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar />
            
            <section className="about-heading">
                <h1>About Halal Crate</h1>
                <p>Fresh. Flavorful. 100% Halal</p>
            </section>

            <div className="about-main">

                <section className="about-text">

                    <div className="about-component">
                        <h2>Our Story</h2>
                        <p>
                            Here at Halal Crate, we have a simple mission we stand by; bring high quality, affordable
                            halal food to the heart of New York City. What began as a small pop up cart on the streets of
                            Ozone Park Queens New York has grown into a local favorite restaurant for students, families and
                            food lovers across all of New York.
                        </p>
                    </div>

                    <div className="about-component">
                        <h2>What We Serve</h2>
                        <p>
                            We specialize in the classic chicken over rice platter and our juicy burgers alongside crispy
                            fried chicken and loaded gyros. Every dish is made fresh using high quality ingredients and
                            authentic spices.
                        </p>
                    </div>

                </section>

                {/* Picture */}
                <img src="assets/img/about-us-image.webp" alt="About Halal Crate" />

            </div>

            <Footer />
        </>
    );
}

export default About;