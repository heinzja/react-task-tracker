import React from 'react'
import {Link} from 'react-router-dom';



const Footer = () => {
    return (
        <div style={{textAlign: 'center'}}> 
            <p>Copyright &copy; { new Date().getFullYear()}</p>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Footer;