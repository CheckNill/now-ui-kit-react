import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <IndexNavbar /> */}
      <ExamplesNavbar /> 
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">干点啥呢?</h2>
                <h5 className="description">
                  没啥正事，没啥好说的，随便写两句吧。然后加几百个省略号。。。                  
                </h5>
                <h5 className="description">
                  PS：图片都没换
                </h5>
                
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      文字也不想换，只是简单的修改修改 <br></br>
                      <br></br>
                      <small>-没办法，得省钱</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    所以，这里该放点啥呢？
                  </h3>
                  <p>
                    是在是不知道该放点啥啊，随便写俩字吧。
                  </p>
                  <p>
                    南无阿弥陀佛，大慈大悲观自在菩萨。。。。。。。
                  </p>
                  <p>
                    这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介这里放简介
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">小团队，图片暂时没替换</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">成员A</h4>
                    <p className="category text-info">web</p>
                    <p className="description">
                      干web的，有多年web开发经验                      
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">成员B</h4>
                    <p className="category text-info">项目经理</p>
                    <p className="description">
                      核心力量，有PMP证书、有多年项目管理经验。深谙敏捷开发之道。
                    </p>
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">成员C</h4>
                    <p className="category text-info">全栈工程师</p>
                    <p className="description">
                      干后台的，也会点前端，移动端，主要使用NodeJS、React。
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">要找我们干点活吗？</h2>
            <p className="description">来吧，联系我们吧，外包价格很便宜哦.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="怎么称呼..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="邮箱或者号码..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="写点啥..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    联系我们
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <DefaultFooter /> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
