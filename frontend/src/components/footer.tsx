import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <div style={{
            height: '50vh',
            paddingTop: '2em', paddingInline: '4em', marginBottom: '2rem',
            display: 'flex', flex: 'row', justifyContent: 'space-between', width: 'inherit',
            borderTop: '1px solid grey'
        }}>
            <div>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p style={{ fontWeight: 'bold' }}>Scribe</p>
                </Link>
                <p style={{fontSize: '14px', marginTop: '2rem'}}>Built By <span style={{ fontWeight: 'bold' }}>Dennis Otu</span></p>
                <p style={{  fontSize: '14px'}}>&copy; 2026 Scribe. All Rights Reserved</p>
            </div>

            <div>
                <p style={{  fontSize: '14px', fontWeight: 'bold' }}>Categories</p>
                <div style={{marginTop: '3em', fontSize: '12px'}}>
                    <p>Sport</p>
                    <p>Business</p>
                    <p>Art</p>
                    <p>Health</p>
                    <p>Tech</p>

                </div>
            </div>

            <div>
                <p style={{  fontSize: '14px', fontWeight: 'bold' }}>Discover</p>
                <div style={{marginTop: '3em', fontSize: '12px'}}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>

            </div>

            <div>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Help</p>
                <div style={{marginTop: '3em', fontSize: '12px'}}>
                    <p>Privacy Policy</p>
                    <p>Terms And Conditions</p>
                    <p>Partners</p>
                </div>
            </div>

        </div>
  
    )
  }
  
export default Footer