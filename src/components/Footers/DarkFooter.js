/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>           
            <li>
              <a
                // href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                简单的写一段，没有意义的话。。。。。
              </a>
            </li>            
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, 一个神奇的网站
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
