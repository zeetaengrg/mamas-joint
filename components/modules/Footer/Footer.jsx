import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCopyright,
} from "react-icons/fa";
import { MdLocationPin, MdPhone, MdMailOutline } from "react-icons/md";
import { Discounts } from "../../templates";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Discounts />
      <div className={styles.container__footer}>
        <section className={styles.footer__logo}>
          <figure className={styles.logo__img}>
            <Image
              src="/images/logo-white.png"
              alt="logo"
              height={60}
              width={100}
            />
          </figure>
          <div className={styles.logo__links}>
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </a>
          </div>
        </section>
        <section className={styles.footer__info}>
          <address className={styles.info__contact}>
            <h3>Contact</h3>
            <div className={styles.contact__location}>
              <MdLocationPin />
              <p>F1 - 320 Jeff Heights, New York</p>
            </div>
            <div className={styles.contact__phone}>
              <MdPhone />
              <span>+01 256 145 789</span>
            </div>
            <div className={styles.contact__mail}>
              <MdMailOutline />
              <a href="mailto:support@yannal.com">support@yannal.com</a>
            </div>
          </address>
          <section className={styles.info__support}>
            <h3>Support</h3>
            <nav
              className={styles.support__links}
              aria-label="secondary-navigation"
            >
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Our Partners</a>
                </li>
              </ul>
            </nav>
          </section>
          <section className={styles.info__items}>
            <h3>Info</h3>
            <nav
              className={styles.items__list}
              aria-label="secondary-navigation"
            >
              <ul>
                <li>
                  <a href="#">Dates</a>
                </li>
                <li>
                  <a href="#">Parties</a>
                </li>
                <li>
                  <a href="#">Birthdays</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
              </ul>
            </nav>
          </section>
        </section>
      </div>
      <div className={styles.container__copyright}>
        <FaCopyright />
        <p>2021 Yannal Restaurant</p>
      </div>
    </footer>
  );
};

export default Footer;
