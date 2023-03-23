import { Link, NavLink } from "react-router-dom"
import {FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitter, FaTiktok} from 'react-icons/fa'

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer text-center bg-dark text-light container-fluid flex-column pt-3">
      <div className="text-center d-block bg-dark text-light container-fluid pt-3">
     
      
      <div className="socialLinks x">
       <ul className="icons flex">
        <li>
          <Link to="https://instagram.com" aria-hidden="true" target="_blank" rel="noopener noreferrer">
           <FaInstagramSquare/>
         </Link>
        </li>
        <li>
          <Link to="https://www.facebook.com" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare></FaFacebookSquare>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com" aria-hidden="true"  target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            <FaTwitter/>
          </Link>
        </li>
        <li><Link to="https://tiktok.com" aria-hidden="true" rel="noopener noreferrer" target="_blank">
         <FaTiktok/>
        </Link></li>
       </ul>
     </div>
 <h3>Copyright &copy; {today.getFullYear()}</h3>
      </div>
    </footer>
  );
};

export default Footer;
