/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/classroom.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/*<img
              alt="..."
              className="n-logo"
              src={require("assets/img/cosmonaut-cartoon.png")}
            ></img>*/}
            <div className="logo-text" style={{marginRight: 0}}><h1>A.</h1></div>
            <h1 className="h1-seo">Aurem Technology.</h1>
            <h3>Transcrição digital para acessibilidade destinado à todo Brasil</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
