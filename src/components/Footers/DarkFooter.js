/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer bg-navbar-solid white-text" >
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                target=""
              >
                  <font className="footer-logo-text">Aurem.</font>
              </a>
            </li>
            <li>
              <a
                href="http://facebook.com/startupaurem"
                target="_blank"
              >
                <i class="fab fa-facebook mr-1"></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/startupaurem"
                target="_blank"
              >
                <i class="fab fa-instagram mr-1"></i>
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, {" "}
          <a
            href="#"
            target=""
          >
            Aurem
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
