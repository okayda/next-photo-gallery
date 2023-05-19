import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/shared/logo.svg";
import classes from "./Header.module.scss";
const Header = function () {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <img src={logo} alt="Logo" />
        <button>
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
