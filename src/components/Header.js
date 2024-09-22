import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
    <h5 className="logo">The journey of a thousand miles begins with one step.</h5>
      <NavLinks />
    </header>
  );
};

export default Header;
