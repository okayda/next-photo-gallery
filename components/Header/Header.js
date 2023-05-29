import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { BsPlusSquareFill } from "react-icons/bs";

import logo from "../../assets/shared/logo.svg";
import classes from "./Header.module.scss";

const Header = function () {
  const [open, setOpen] = useState(false);

  const menuHandler = function () {
    setOpen((prev) => !prev);
  };

  return (
    <header className={`${classes.header} ${!open ? "" : classes.active}`}>
      <div className={classes.header__container}>
        <div className={classes.header__btn}>
          <img src={logo} alt="Logo" />

          <button onClick={menuHandler}>
            {!open ? <RxHamburgerMenu /> : <GrClose />}
          </button>
        </div>

        <nav className={classes.header__links}>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">stories</a>
            </li>
            <li>
              <a href="#">features</a>
            </li>
            <li>
              <a href="#">pricing</a>
            </li>
          </ul>
        </nav>

        <div className={classes.header__invite}>
          <a href="#">get an invite</a>
        </div>

        <div className={classes.header__plus}>
          <a href="#">
            <BsPlusSquareFill />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
