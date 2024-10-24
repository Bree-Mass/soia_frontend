import { Link } from "react-router-dom";
import headerLogo from "../assets/header-logo.png";
import "../blocks/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={headerLogo} alt="header logo" className="header__logo" />
      </Link>
      <div className="header__links">
        <Link to="/book1" className="header__link">
          Book 1
        </Link>
        <Link to="/book2" className="header__link">
          Book 2
        </Link>
        <Link to="/store" className="header__link">
          Store
        </Link>
        <Link to="/contact" className="header__link">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;