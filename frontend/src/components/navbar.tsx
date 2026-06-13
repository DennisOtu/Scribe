import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navBar">
            <div>
                <Link to='' style={{ textDecoration: 'none', color:'inherit' }}>
                    About
                </Link>
            </div>

            <div className="brand">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Scribe
                </Link>
            </div>

            <div className="navRight">
				 <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
					Search
				</Link>

                <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Sign Up
                </Link>

                <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Log In
                </Link>
            </div>
        </nav>
    )

}

export default Navbar