import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-light">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    PinBoard
                </Link>

                <div>
                    <Link className="btn btn-link" to="/">
                        Home
                    </Link>

                    <Link className="btn btn-link" to="/explore">
                        Explore
                    </Link>
                    <Link className="btn btn-link" to="/saved">
                        My Pins
                    </Link>

                    <Link className="btn btn-primary" to="/create">
                        Create Pin
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;