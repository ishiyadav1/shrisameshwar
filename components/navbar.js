class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <style>
          nav {
            background: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            background: linear-gradient(to right, #FF9933, #138808);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .nav-links {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .nav-links a {
            color: #4B5563;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
          }
          .nav-links a:hover {
            color: #138808;
          }
          .nav-links a.active {
            color: #FF9933;
            font-weight: 600;
          }
          .nav-links a.active::after,
          .nav-links a:hover::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #FF9933, #138808);
          }
          .donate-btn {
            background: linear-gradient(to right, #FF9933, #138808);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .donate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 153, 51, 0.3);
          }
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #4B5563;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .mobile-menu-btn {
              display: block;
            }
            .nav-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 70px;
              left: 0;
              right: 0;
              background: white;
              padding: 1rem;
              box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            }
            .nav-links.active {
              display: flex;
            }
          }
        </style>
        <nav>
          <a href="index.html" class="logo">
  <span>श्री समेश्वर शिव शक्ति सदन ट्रस्ट हरिद्वार धाम</span>
</a>

          <button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
<li><a href="about.html">About</a></li>
<li><a href="vision.html">Vision</a></li>
<li><a href="donate.html" class="donate-btn">Donate</a></li>

          </ul>
        </nav>
      `;



    // Mobile menu toggle functionality
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        feather.replace();
      });
    }

    // Highlight current page link
    const currentPath = window.location.pathname;
    const links = this.shadowRoot.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);