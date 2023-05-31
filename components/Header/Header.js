import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { BsPlusSquareFill } from "react-icons/bs";

import logo from "../../assets/shared/logo.svg";
import classes from "./Header.module.scss";

const Header = function () {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuHandler = function () {
    setOpen((prev) => !prev);
  };

  return (
    <header className={`${classes.header} ${!open ? "" : classes.active}`}>
      <div className={classes.header__container}>
        <div className={classes.header__btn}>
          <Link href="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button onClick={menuHandler}>
            {!open ? <RxHamburgerMenu /> : <GrClose />}
          </button>
        </div>

        <nav className={classes.header__links}>
          <ul>
            <li>
              <Link
                href="/"
                className={
                  pathname === "/" ? classes["header__links--active"] : ""
                }
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/stories"
                className={
                  pathname === "/stories"
                    ? classes["header__links--active"]
                    : ""
                }
              >
                stories
              </Link>
            </li>
            <li>
              <Link
                href="features"
                className={
                  pathname === "/features"
                    ? classes["header__links--active"]
                    : ""
                }
              >
                features
              </Link>
            </li>
            <li>
              <Link
                href="pricing"
                className={
                  pathname === "/pricing"
                    ? classes["header__links--active"]
                    : ""
                }
              >
                pricing
              </Link>
            </li>
          </ul>
        </nav>

        <div className={classes.header__invite}>
          <Link href="/">get an invite</Link>
        </div>

        <div className={classes.header__plus}>
          <Link href="/">
            <BsPlusSquareFill />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
