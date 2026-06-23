import instagram from "/assets/img/instagram-logo.svg";
import twitter from "/assets/img/twitter-logo.svg";
import facebook from "/assets/img/facebook-logo.svg";
import youtube from "/assets/img/youtube-logo.svg";

function Footer() {
    return (
        <footer>
            <div className="footer-content">

                {/* left */}
                <div className="footer-left">
                    <h4>Halal Crate</h4>
                    <p>123 Liberty Avenue, Queens, NY 12345</p>
                    <p>(123)-456-7890</p>
                </div>

                {/* Mid */}
                <div className="footer-middle">
                    <h4>Hours</h4>
                    <p>Weekdays: 10:00am - 11:30pm</p>
                    <p>Weekends: 9:30am - 11:45pm</p>
                </div>

                {/* right */}
                <div className="footer-right">
                    <h4>More of Us!</h4>

                    <ul className="social-media-links">
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src={instagram} alt="Instagram" />
                                Instagram
                            </a>
                        </li>

                        <li>
                            <a href="https://www.twitter.com/" target="_blank">
                                <img src={twitter} alt="Twitter" />
                                Twitter
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <img src={facebook} alt="Facebook" />
                                Facebook
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                <img src={youtube} alt="YouTube" />
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <p className="copyright">
                &copy; 2026 Halal Crate. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;