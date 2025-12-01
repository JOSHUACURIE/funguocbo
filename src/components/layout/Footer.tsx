import React from 'react';
import '../../styles/globals.css';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaShieldAlt, FaLeaf, FaBalanceScale } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section - Main Info, Quick Links, Connect With Us */}
        <div className="footer-top-sections">
          {/* Organization Information */}
          <div className="footer-section main-info">
            <h3 className="footer-title">
              FUNGUO <br /> Youth Leading for a Better Future
            </h3>
            <p className="footer-tagline">
              Unlocking Youth Potential for Sustainable Change
            </p>

            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">
                  <FaEnvelope size={22} />
                </span>
                <span>funguo76@gmail.com</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <FaPhoneAlt size={22} />
                </span>
                <span>0748 399 254 / 0793 604 796</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <HiLocationMarker size={24} />
                </span>
                <span>Rongo, Migori County, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about/who-we-are">About FUNGUO</a></li>
              <li><a href="/governance/board">Our Team</a></li>
              <li><a href="/programs/youth-empowerment">Our Programs</a></li>
              <li><a href="/get-involved/volunteer">Get Involved</a></li>
              <li><a href="/media/gallery">Impact Gallery</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-section connect-section">
            <h4 className="footer-heading">Connect With Us</h4>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a 
                href="https://www.facebook.com" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <span className="social-icon">
                  <FaFacebookF />
                </span>
                <span className="social-text">Facebook</span>
              </a>

              <a 
                href="https://linkedin.com" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <span className="social-icon">
                  <FaLinkedinIn />
                </span>
                <span className="social-text">LinkedIn</span>
              </a>

              <a 
                href="mailto:funguo76@gmail.com"
                className="social-link"
                aria-label="Send us an email"
              >
                <span className="social-icon">
                  <FaEnvelope />
                </span>
                <span className="social-text">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Our Programs, Stay Updated, Additional Content */}
        <div className="footer-middle-sections">
          {/* Our Programs */}
          <div className="footer-section programs-section">
            <h4 className="footer-heading">Our Focus Areas</h4>
            <div className="programs-grid">
              <div className="program-item">
                <span className="program-icon">
                  <FaUsers />
                </span>
                <div className="program-content">
                  <h5>Youth Empowerment</h5>
                  <p>Unlocking youth potential through mentorship and capacity building</p>
                </div>
              </div>
              
              <div className="program-item">
                <span className="program-icon">
                  <FaLeaf />
                </span>
                <div className="program-content">
                  <h5>Climate Change</h5>
                  <p>Youth-led environmental conservation and sustainable solutions</p>
                </div>
              </div>
              
              <div className="program-item">
                <span className="program-icon">
                  <FaHandHoldingHeart />
                </span>
                <div className="program-content">
                  <h5>Agri-business</h5>
                  <p>Modern farming techniques and agricultural entrepreneurship</p>
                </div>
              </div>
              
              <div className="program-item">
                <span className="program-icon">
                  <FaBalanceScale />
                </span>
                <div className="program-content">
                  <h5>Governance & Civic Education</h5>
                  <p>Educating youth on civic rights and governance participation</p>
                </div>
              </div>

              <div className="program-item">
                <span className="program-icon">
                  <FaShieldAlt />
                </span>
                <div className="program-content">
                  <h5>Gender Equity</h5>
                  <p>Promoting equal opportunities with boychild empowerment focus</p>
                </div>
              </div>

              <div className="program-item">
                <span className="program-icon">
                  <FaGraduationCap />
                </span>
                <div className="program-content">
                  <h5>Networks & Innovation</h5>
                  <p>Fostering youth networks and innovative thinking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section newsletter-main">
            <div className="newsletter-section">
              <h5 className="newsletter-title">Stay Updated</h5>
              <p className="newsletter-description">
                Join our youth network and stay informed about our latest initiatives, 
                leadership opportunities, and sustainable change projects.
              </p>

              <ul className="newsletter-benefits">
                <li>🌟 Be the first to know about youth leadership programs</li>
                <li>💡 Get updates on innovation and networking opportunities</li>
                <li>🌱 Stay informed about climate action and agri-business projects</li>
              </ul>

              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                  required
                />
                <button 
                  type="submit" 
                  className="newsletter-button"
                  aria-label="Subscribe to newsletter"
                >
                  Join Our Network
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} FUNGUO - Youth Leading for a Better Future. All rights reserved.</p>
            </div>

            <div className="legal-links">
              <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
              <a href="/terms-of-service" className="legal-link">Terms of Service</a>
              <a href="/transparency" className="legal-link">Transparency</a>
              <a href="/contact" className="legal-link">Contact Us</a>
            </div>

            <div className="footer-info">
              <p>Empowering Youth | Fostering Innovation | Championing Sustainable Change</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;