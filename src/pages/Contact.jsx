import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <Navbar />

            <section className="contact-heading">
                <h1>Contact Us</h1>
            </section>

            <section className="contact-box">

                <div className="contact-left">
                    <h2>Get in Touch</h2>

                    <p>📍 123 Liberty Avenue, Queens, NY</p>
                    <p>📞 (123) 456-7890</p>
                    <p>📧 halalcratesupport@halalcrate.com</p>

                    <h3>Hours</h3>
                    <p>Weekdays: 10:00AM - 11:30PM</p>
                    <p>Weekends: 9:30AM - 11:45PM</p>
                </div>

                <div className="contact-right">
                    <p>We'd love to hear from you!</p>

                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="text" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </section>

            <section className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.885522636956!2d-73.83914412547098!3d40.676491239791005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2675e7179cc7b%3A0x49c12cbc9ef59c1b!2s133-0-133-98%20Boss%20St%2C%20Ozone%20Park%2C%20NY%2011417!5e0!3m2!1sen!2sus!4v1781571976979!5m2!1sen!2sus"
                    loading="lazy"
                />
            </section>

            <Footer />
        </>
    );
}

export default Contact;