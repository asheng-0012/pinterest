import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="pb-navbar">
            <div className="container pb-navbar-inner">

                <Link className="pb-brand" to="/">
                    PinBoard
                </Link>

                <div className="d-flex align-items-stretch">
                    <Link
                        className={`pb-nav-link${location.pathname === "/" ? " active" : ""}`}
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className={`pb-nav-link${location.pathname === "/saved" ? " active" : ""}`}
                        to="/saved"
                    >
                        My Pins
                    </Link>

                    <Link className="pb-btn-accent ms-3 my-auto me-0" to="/create">
                        + Create
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;