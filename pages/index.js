import Head from "next/head";
import React, { useState} from "react";
import styles from "../styles/Home.module.css";
import FilterableProductGrid from "./components/FilterableProductGrid";
import Footer from "./components/footer";

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const products = [
    { id: 1, name: "Product Name", image: "/img1.jpg" },
    { id: 2, name: "Product Name", image: "/img2.jpg" },
    { id: 3, name: "Product Name", image: "/img3.jpg" },
    { id: 4, name: "Product Name", image: "/img4.jpg" },
    { id: 5, name: "Product Name", image: "/img5.jpg" },
    { id: 6, name: "Product Name", image: "/img6.jpg" },
    { id: 7, name: "Product Name", image: "/img7.jpg" },
    { id: 8, name: "Product Name", image: "/img8.jpg" },
    { id: 9, name: "Product Name", image: "/img9.jpg" },
  ];

  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta
          name="description"
          content="Explore a wide range of products. High quality and beautifully designed items to meet your needs."
        />
      </Head>
      <header className={styles.mainHeader}>
        <div className={styles.header}>
        <div className={styles.header3}>
      <nav className={styles.nav}>
        {/* Hamburger Icon - Visible on small screens when the menu is closed */}
        {!isMenuOpen && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        )}

        {/* Cross Icon - Visible when the menu is open */}
        {isMenuOpen && (
          <div className={styles.closeIcon} onClick={toggleMenu}>
            &#10005; {/* This is the cross (X) symbol */}
          </div>
        )}

        {/* Menu */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          <a href="#">Shop</a>
          <a href="#">Gallery</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </div>
      <img
          src="/logo.png"
          alt="logo"
          
        />
        
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <img src="/search.png" alt="icon" className={styles.icon} />
          <img src="/heart.png" alt="icon" className={styles.icon} />
          <img src="/bag.png" alt="icon" className={styles.icon} />
          <img src="/user.png" alt="icon" className={`${styles.icon} ${styles.userIcon}`} />
          <div className={styles.languageDropdown}>
    <button className={styles.languageButton}>
      ENG <span className={styles.downArrow}>▼</span>
    </button>
    <ul className={styles.dropdownMenu}>
      <li className={styles.dropdownItem}>ENG</li>
      <li className={styles.dropdownItem}>FR</li>
      <li className={styles.dropdownItem}>GER</li>
      <li className={styles.dropdownItem}>ESP</li>
    </ul>
  </div>
        </nav>
        
        </div>
        <div className={styles.header2}>
      <nav className={styles.nav}>
        {/* Hamburger Icon - Visible on small screens when the menu is closed */}
        {!isMenuOpen && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        )}

        {/* Cross Icon - Visible when the menu is open */}
        {isMenuOpen && (
          <div className={styles.closeIcon} onClick={toggleMenu}>
            &#10005; {/* This is the cross (X) symbol */}
          </div>
        )}

        {/* Menu */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          <a href="#">Shop</a>
          <a href="#">Gallery</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </div>


      </header>

      <main className={styles.main}>
        <div className={styles.container}>

        
  <h1 className={styles.mainHeading}>Discover Our Products</h1>
  <p className={styles.description}>
    Lorem ipsum dolor sit amet consectetur. Nulla et auctor praesent pharetra
    scelerisque. Donec tempus pellentesque nisi amet erat in ornare donec.
  </p>

  </div>

  <FilterableProductGrid />
</main>


      <Footer />
    </>
  );
}
