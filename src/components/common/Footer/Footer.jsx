import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">© Academlo 2023</div>
      <div className="social-networks">
        <a href="https://www.instagram.com/academlohq/">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/academlo/">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/c/academlo">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
