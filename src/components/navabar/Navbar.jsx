import logo from "../../assets/logo.svg"; // Assuming you have a logo image
import arrow from "../../assets/arrow.jpg";
import style from "./Navbar.module.scss"; // Importing styles from a CSS module

export const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      {/* Logo */}
      <img src={logo} alt="Logo" />

      {/* Navigation Links */}
      <ul>
        <li className={style.liImg}>
          Home <img src={arrow} alt="" />
        </li>
        <li>How it works</li>
        <li>Find instructors</li>
        <li className={style.liImg}>
          Pages <img src={arrow} alt="" />
        </li>
        <li>Contact Us</li>
      </ul>

      {/* Button */}
      <button>Get started</button>
    </div>
  );
};
