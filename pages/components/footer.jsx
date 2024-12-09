import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.inputField}
            />
            <button type="submit" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>




        {/* Contact Section */}
        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4 className={styles.currencyTitle}>CURRENCY</h4>
          <p> <img src="/usaFlag.png" alt="Us Flag" /> USD</p>
          <div className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className={styles.linksSection}>
        <div>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <img src="/insta.png" alt="Instagram" />
            <img src="/link.png" alt="LinkedIn" />
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <img src="/frame.png" alt="icons" />

          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
