import React from "react";
import Container from "./Container";
import { ReactComponent as Github } from "../github.svg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-flex">
          <p>&copy; {new Date().getFullYear()}, Tarik Ouazzani Touhami</p>
          <a
            href="https://github.com/kiratot"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github height={25} width={25} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
