class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <style>
          footer {
            background: linear-gradient(to right, #1a365d, #2c5282);
            color: white;
            padding: 3rem 2rem;
            margin-top: 4rem;
          }
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .footer-logo {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #FF9933, #FFFFFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .footer-section p {
            margin-bottom: 1rem;
            opacity: 0.8;
            line-height: 1.6;
          }
          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .footer-links li {
            margin-bottom: 0.5rem;
          }
          .footer-links a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
          }
          .footer-links a:hover {
            opacity: 1;
          }
          .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }
          .social-links a {
            color: white;
            background: rgba(255, 255, 255, 0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s;
          }
          .social-links a:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          .copyright {
            text-align: center;
            padding-top: 2rem;
            margin-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            opacity: 0.7;
          }
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
            }
          }
        </style>
        <footer>
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">Ashram</div>
              <p>Building a sacred space for spiritual seekers in the holy city of Haridwar. Join us in this divine mission.</p>
              <div class="social-links">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
                <a href="#"><i data-feather="youtube"></i></a>
              </div>
            </div>
            <div class="footer-section">
              <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="vision.html">Our Vision</a></li>
                <li><a href="donate.html">Donate</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3 class="text-lg font-semibold mb-3">Contact Us</h3>
              <p><i data-feather="map-pin" class="inline mr-2"></i> Haridwar, Uttarakhand, India</p>
              <p><i data-feather="mail" class="inline mr-2"></i> contact.shivshakti@gmail.com</p>
              <p><i data-feather="phone" class="inline mr-2"></i> +91 81262 52912</p>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Ashram Initiative. All rights reserved.</p>
          </div>
        </footer>
      `;
  }
}
customElements.define('custom-footer', CustomFooter);