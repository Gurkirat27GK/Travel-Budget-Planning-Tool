import React from "react";
import "../styles/footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
          Tripwise helps travelers plan, <br/>track, and manage their trip <br/>expenses with ease. From <br/>setting budget goals to monitoring <br/>real-time spending, we make <br/>travel smarter and stress-free.
          </p>
          <div classNameName="social-links">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank"
                ><i className="fa fa-facebook"></i
              ></a>
              <a href="https://instagram.com" target="_blank"
                ><i className="fa fa-instagram"></i
              ></a>
              <a href="https://twitter.com" target="_blank"
                ><i className="fa fa-twitter"></i
              ></a>
              <a href="https://youtube.com" target="_blank"
                ><i className="fa fa-youtube"></i
              ></a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>
            <a href="/">Home</a
            >
          </p>
          <p>
            <a href="/blog"
              >Blog</a
            >
          </p>
          <p>
            <a href="#" 
              >Privacy Policy</a
            >
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span>📍</span>
              <p>#128 Subash nagar, New Delhi</p>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <p>+91 9929999991  </p>
            </div>
            <div className="contact-item">
              <span>✉</span>
              <p>info@tripwise.com</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="3" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2025 Travel Budget Buddy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
