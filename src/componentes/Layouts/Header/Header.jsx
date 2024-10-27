
// Header Component
import { NavItems } from '../NavItems/NavItems';
import logo from '../../../assets/images/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <NavItems />
    </header>
  );
};