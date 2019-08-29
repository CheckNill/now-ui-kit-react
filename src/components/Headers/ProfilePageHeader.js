import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
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
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div>
          <h3 className="title">项目主要负责人</h3>
          <p className="category">成员B</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>年龄</p>
            </div>
            <div className="social-description">
              <h2>5</h2>
              <p>工作年限</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>总交付项目</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
