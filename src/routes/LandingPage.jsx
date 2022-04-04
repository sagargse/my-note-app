import "./LandingPage.css";
import { Link } from "react-router-dom";
import LandingPageImage from "../assets/landingPage.png"

const LandingPage = () => {
    return (
        <div className="landing-page-container">
                <aside className="landing-page-left-side">
                    <h1 className="landing-page-heading">
                        <span>Notes</span>Fetch
                    </h1>
                    <div className="landing-page-details">
                        <h3 className="landing-page-sub-heading-1">Meet your modern</h3>
                        <h3 className="landing-page-sub-heading-2">Note Taking App</h3>
                        <p className="landing-page-description">
                            Manage your daily tasks and workflow in a modern way and boost your
                            efficiency without any efforts.
                        </p>
                    </div>
                    <div className="landing-page-authentication">
                        <Link 
                        to="/signup">
                            <button className="primary-button solid-button landing-page-signup-button">Join Now</button>
                        </Link>
                        <Link
                            to="/login"
                            className="landing-page-login-button"
                        >
                            Already have an account?
                        </Link>
                    </div>
                </aside>
                <img
                className="imag-responsive landing-page-image"
                src={LandingPageImage}
                alt="landing page">   
                </img>
        </div>
    );
};
export { LandingPage }