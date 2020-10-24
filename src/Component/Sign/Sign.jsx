import React from "react";
import classes from "../../assets/Styles/Signup.module.scss";
import { Col, Layout, Row, Tabs } from "antd";
import Signup from "./Signup";
import Signin from "./signin";

const { Content } = Layout;
const { TabPane } = Tabs;

const Sign = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <Layout className={classes.signup}>
      <Content>
        <Row style={{ width: "100%", height: "100%" }}>
          <Col
            md={7}
            style={{
              height: "100%",
              maxHeight: "100%",
              overflow: "scroll",
              padding: "0 40px",
              backgroundColor: "#f3993e"
            }}
          >
            <div className={classes.signupArt}>
              <div className={classes.signupArtdescr}>
                <h1>Sticketch</h1>
                <ul>
                  <li>Integer molestie lacus sed tellus dapibus vulputate.</li>
                  <li>Nulla egestas tortor in efficitur aliquet.</li>
                  <li>In a nisl et sapien tristique porttitor.</li>
                </ul>
              </div>
              <img src={require('../../assets/Img/Market/i-need-space-pop-art.png')} alt=""/>
            </div>
          </Col>
          <Col
            md={17}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Tabs type="card" className={classes.tabs}>
              <TabPane tab="Sign up" key="1">
                <Signup/>
              </TabPane>
              <TabPane tab="Login" key="2">
                <Signin/>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sign;
