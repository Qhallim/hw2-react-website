import instagram from "/assets/img/instagram-logo.svg";
import twitter from "/assets/img/twitter-logo.svg";
import facebook from "/assets/img/facebook-logo.svg";
import youtube from "/assets/img/youtube-logo.svg";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">

            <div className="container">
                <div className="row align-items-start text-center text-md-start">

                    {/* left */}
                    <div className="col-12 col-md-4 text-center">
                        <h5>Halal Crate</h5>
                        <p className="mb-1">123 Liberty Avenue, Queens, NY 12345</p>
                        <p>(123)-456-7890</p>
                    </div>

                    {/* middle */}
                    <div className="col-12 col-md-4 text-center">
                        <h5>Hours</h5>
                        <p className="mb-1">Weekdays: 10:00am - 11:30pm</p>
                        <p>Weekends: 9:30am - 11:45pm</p>
                    </div>

                    {/* right */}
                    <div className="col-12 col-md-4 text-center">
                        <h5>More of Us!</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" className="text-white text-decoration-none">
                                    <img src={instagram} alt="Instagram" width="24" height="24" className="px-1"/>
                                    Instagram
                                </a>
                            </li>

                            <li>
                                <a href="https://www.twitter.com/" target="_blank" className="text-white text-decoration-none">
                                    <img src={twitter} alt="Twitter" width="24" height="24" className="px-1" />
                                    Twitter
                                </a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/" target="_blank" className="text-white text-decoration-none">
                                    <img src={facebook} alt="Facebook" width="24" height="24" className="px-1" />
                                    Facebook
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/" target="_blank" className="text-white text-decoration-none">
                                    <img src={youtube} alt="YouTube" width="24" height="24" className="px-1" />
                                    YouTube
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>

                <hr className="border-light" />

                <p className="text-center mb-0">
                    © 2026 Halal Crate
                </p>
            </div>

        </footer>
    );
}

export default Footer;