import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdSearch,
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
  MdRestaurantMenu,
} from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";
import styles from "./Nav.module.scss";

const iconStyle = {
  color: "#2A333E",
  fontSize: "1.5rem",
  cursor: "pointer",
  _hover: {
    color: "#000000",
  }
}

const Nav = () => {

  const [open, setOpen] = useState(false);

  const openMenu = (
    <CgMenuHotdog
      style={iconStyle}
      className={styles.header__menu__open}
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
  
  const closeMenu = (
    <MdRestaurantMenu
      style={iconStyle}
      className={styles.header__menu__close}
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Link href="/" passHref >
            <Image src="/images/logo.svg" alt="Logo" height={30} width={100} />
          </Link>
        </div>
        <nav className={styles.header__center}>
          <ul>
            <li>
              <Link href="#menu">
                Menu
              </Link>
              <Link href="#about">
                About Us
              </Link>
              <Link href="#specials">
                Our Specials
              </Link>
              <Link href="#locations">
                Our Locations
              </Link>
              <Link href="#chef">
                Our Chef
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__right}>
          <MdSearch style={iconStyle} />
          <MdOutlineShoppingCart style={iconStyle} />
          <MdOutlineAccountCircle style={iconStyle} />
          <div className={styles.header__menu}>
            {open ? closeMenu : openMenu}
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;