import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navBar">
            <div className="brand" >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Scirbe
            </Link>
            </div>
            <div className="navRight" >
                <div>
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Sign Up
                    </Link>
                </div>

                <div>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Log In
                    </Link>
                </div>
            </div>
        </nav>
    )

}

export default Navbar