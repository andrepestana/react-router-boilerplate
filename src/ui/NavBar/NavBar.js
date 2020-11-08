import { Link } from 'react-router-dom';



function NavBar() {
    return (
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/about">About Us </Link></li>
        <li><Link to="/contact">Contact Us </Link></li>
      </ul>
    );
  };

  export default NavBar;