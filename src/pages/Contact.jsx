import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Contact() {
    return (
        <>
            <Navbar />

            <section className="text-center text-white py-5">
                <h1 className="display-5 fw-bold">Contact Us</h1>
            </section>

            <div className="container pb-5">
                <div className="row g-4">

                    <div className="col-12 col-lg-5 text-white text-center">
                        <h2 className="mb-3">Get in Touch</h2>

                        <p>📍 123 Liberty Avenue, Queens, NY</p>
                        <p>📞 (123) 456-7890</p>
                        <p>📧 halalcratesupport@halalcrate.com</p>

                        <hr className="border-light my-4" />

                        <h4>Hours</h4>
                        <p>Weekdays: 10:00AM - 11:30PM</p>
                        <p>Weekends: 9:30AM - 11:45PM</p>
                    </div>

                    <div className="col-12 col-lg-7">

                        <div className="bg-dark p-4 rounded text-white">
                            <p className="text-center mb-4">
                                We'd love to hear from you!
                            </p>

                            <form className="d-flex flex-column gap-3">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="form-control"
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="form-control"
                                    required
                                />

                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="form-control"
                                    required
                                />

                                <button className="btn btn-red">
                                    Submit
                                </button>

                            </form>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container pb-5">
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3831853355455!2d-73.8233671254703!3d40.687557739113934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2674a29c98143%3A0xb99fd1a0043789e8!2sLiberty%20Ave%20%26%20123rd%20St%2C%20Queens%2C%20NY%2011419!5e0!3m2!1sen!2sus!4v1782362073598!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;