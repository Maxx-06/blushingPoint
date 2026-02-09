import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Facebook, Instagram, Twitter } from "lucide-react";
function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#543E33] flex flex-col items-center gap-10 py-20 text-[#FFFBF3]"
    >
      {/* Navigation Links */}
      <div className="text-xl items-center flex flex-col lg:flex-row gap-10">
        <a href="#hero" className="hover:opacity-70">
          HOME
        </a>
        <a href="#about" className="hover:opacity-70">
          ABOUT US
        </a>
        <a href="#services" className="hover:opacity-70">
          SERVICES
        </a>
        <Link to="/gallroid" className="hover:opacity-70">
          GALLERY
        </Link>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2">
        <a href="tel:+917084590803" className="hover:underline">
          +91 70845 90803
        </a>
        <a href="mailto:example@email.com" className="hover:underline">
          example@email.com
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-row gap-6 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="hover:text-blue-500 transition-colors" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="hover:text-pink-500 transition-colors" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className="hover:text-blue-400 transition-colors" />
        </a>
      </div>

      <div className="text-sm opacity-50">
        &copy; 2026. All rights reserved.
      </div>
      <div className="max">MADE WITH ❤️ BY MAX</div>
    </footer>
  );
}

export default Footer;
